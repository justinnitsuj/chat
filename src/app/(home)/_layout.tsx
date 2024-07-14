
import { Slot, Stack, Tabs } from 'expo-router';
import ChatProvider from '../../providers/ChatProvider';
import { useAuth } from '../../providers/AuthProvider';
import { Redirect } from 'expo-router';
export default function HomeLayout() {
    const { user } = useAuth();

    if(!user){
        return <Redirect href="/(auth)/login" />
    }

    return (
        <ChatProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
            </Stack>
        </ChatProvider>
    );
}