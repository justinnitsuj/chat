
// Define global providers
import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Auth from './(auth)/login';
import AuthProvider from '../providers/AuthProvider';
export default function RootLayout() {
    return (
      <GestureHandlerRootView style={{flex:1}}>
        <AuthProvider>
          <Slot />
        </AuthProvider>
      </GestureHandlerRootView>  
    );
}