
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
type Props = {
  children: ReactNode
}
type UserProps = {
  id: string;
  name: string;
  email: string;
  token: string;
}

interface SignInProps {
  email: string;
  password: string;
}
interface AuthContextProps {
  user: UserProps
  isAuthenticated: boolean
  singIn: (credentials: SignInProps) => Promise<void>;
  loadingAsyncStorage: boolean;
  signOut: () => Promise<void>;
}
const AuthContext = createContext({} as AuthContextProps)


export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<UserProps>({
    id: '',
    email: '',
    name: '',
    token: '',
  });
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loadingAsyncStorage, setloadingAsyncStorage] = useState(true);
  const isAuthenticated = !!user.name

  useEffect(() => {
    async function refreshDataUserAsync() {

      const user = await AsyncStorage.getItem('@pizza');

      let hasParsedUser: UserProps = JSON.parse(user || '{}');

      if(Object.keys(hasParsedUser).length > 0 ) {
       api.defaults.headers.common['Authorization'] = `Bearer ${hasParsedUser.token}`
       setUser({
        id: hasParsedUser.id,
        name: hasParsedUser.name,
        email: hasParsedUser.email,
        token: hasParsedUser.token
       })
      }
    }
    setloadingAsyncStorage(false)

    refreshDataUserAsync()
  }, [user, loadingAuth])

  async function singIn({email, password}: SignInProps){
    setLoadingAuth(true)

    try {
      const { data } = await api.post('/session', {
        email,
        password,
      })

     const { id, name, token } = data

     const response = {
      ...data,
     }

     await AsyncStorage.setItem('@pizza',JSON.stringify(response))
     
     api.defaults.headers.common['Authorization'] = `Bearer ${token}`
     setUser({
      id,
      name,
      email,
      token
     })
     setLoadingAuth(false)

    } catch (error) {
      console.log(error)
      setLoadingAuth(false)
    }

   
  } 

  async function signOut() {
    await AsyncStorage.clear()
    .then(() => {
      setUser({
        id: '',
        email: '',
        name: '',
        token: '',
      })
    })
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        singIn,
        loadingAsyncStorage,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context;
}