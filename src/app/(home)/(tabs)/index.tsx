import { Channel, ChannelList, MessageInput, MessageList } from 'stream-chat-expo';
import React, { useState } from 'react';
import { router } from 'expo-router';
export default function MainTabScreen() {


    return (
        <ChannelList onSelect={(channel) => router.push(`/channel/${channel.cid}`)} />
    
    );
}