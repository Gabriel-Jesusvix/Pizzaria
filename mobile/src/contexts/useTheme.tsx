
import { ReactNode, createContext, useContext } from 'react';
import { View } from 'react-native';

type Props = {
  children: ReactNode
}

interface useThemeProps {
  useTheme: () => void
}
const UseThemContext = createContext({} as  useThemeProps)


export function UseTheme({ children }: Props) {


  function useTheme() {
    return (
      <View style={{backgroundColor: '#1D1D2E'}}></View>
    )
  }
  return (
    <UseThemContext.Provider
      value={{
        useTheme
      }}
    >
      {children}
    </UseThemContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(UseThemContext)
  return context
  
}