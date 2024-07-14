import { PropsWithChildren } from "react";
import { useEffect } from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-expo";
import { OverlayProvider } from "stream-chat-expo";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { useAuth } from "../providers/AuthProvider";
import { supabase } from "../lib/superbase";
const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_API_KEY);

export default function ChatProvider({children}: PropsWithChildren) {
    const [isReady, setIsReady] = useState(false);
    const {profile} = useAuth();
    useEffect(() => {
        if(!profile){
            return;
        }
        const connect = async () => {
            await client.connectUser(
                {
                  id: profile.id,
                  name: profile.full_name,
                  image: supabase.storage.from('avatars').getPublicUrl(profile.avatar_url).data.publicUrl,
                },
                client.devToken(profile.id),
              );
            setIsReady(true);

            //   const channel = client.channel('messaging', 'the_park', {
            //     name: 'The Park',
            //   });
            //   await channel.watch();
        };
        connect();
        return () => {
            if(isReady){
                client.disconnectUser();
            }
            
            setIsReady(false);
        };
    }, [profile?.id]);

    if (!isReady) {
        return <ActivityIndicator/>
    }
    return (
        <OverlayProvider>
            <Chat client={client}>
                {children}
            </Chat>
        </OverlayProvider>
    );
}