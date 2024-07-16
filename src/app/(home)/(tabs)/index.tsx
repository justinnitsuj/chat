import { Channel, ChannelList, MessageInput, MessageList } from 'stream-chat-expo';
import React, { useState } from 'react';
import { Link, Redirect, router } from 'expo-router';
import { useAuth } from '../../../providers/AuthProvider';
import { Stack } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
export default function MainTabScreen() {
    const {user} = useAuth();

    return (
        <>
        <Stack.Screen 
            options={{
                headerRight: () => (
                    <Link href={'/(home)/users'} asChild>
                        <FontAwesome5 
                            name="users" 
                            size={22} 
                            color="gray"
                            style={{marginHorizontal: 18}}  
                            />
                    </Link>
        ),
         }} />
        <ChannelList 
        filters={{members: {$in: [user.id] }}}
        onSelect={(channel) => router.push(`/channel/${channel.cid}`)} />
        </>
    );
}