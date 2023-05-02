import { ActivityIndicator, View } from "react-native";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../contexts/Auth";



export function Routes() {
  const { isAuthenticated, loadingAsyncStorage } = useAuth()
  const loading = false

  if(loadingAsyncStorage) {
    return (
        <View 
        style={{
          flex: 1, 
          backgroundColor: '#1D1D2E', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
        <ActivityIndicator size="large" color="#FFF" />
      </View>
    )
  }
  return (
    isAuthenticated ? <AppRoutes /> : <AuthRoutes />
  )
}