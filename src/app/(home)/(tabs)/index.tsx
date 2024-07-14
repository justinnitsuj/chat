import { Channel, ChannelList, MessageInput, MessageList } from 'stream-chat-expo';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { useAuth } from '../../../providers/AuthProvider';
export default function MainTabScreen() {
    const {user} = useAuth();

    return (
        <ChannelList 
        filters={{members: {$in: [user.id] }}}
        onSelect={(channel) => router.push(`/channel/${channel.cid}`)} />
    
    );
}