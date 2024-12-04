"use client"

import { MessageSquare, Video } from 'lucide-react'
import { FeatCard } from '@/components/FeatCard'

export default function CommunicationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br">
      <div className="mx-auto max-w-7xl space-y-8">
        <h1 className="text-4xl font-bold text-slate-300 md:text-5xl lg:text-6xl dark:text-gray-100">Communication Center</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          <FeatCard
            title="Video Meeting"
            description="Start or join video conferences with teachers"
            icon={Video}
            buttonText="Open Video Meeting"
            buttonLink="/list/meeting"
            gradientFrom="#2563EB"
            gradientTo="#4F46E5"
          />
          <FeatCard
            title="Chat Messages"
            description="Send messages and communicate with teacher"
            icon={MessageSquare}
            buttonText="Open Chat"
            buttonLink="/list/message"
            gradientFrom="#7C3AED"
            gradientTo="#6D28D9"
          />
        </div>
      </div>
    </div>
  )
}

