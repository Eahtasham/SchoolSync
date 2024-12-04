'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { type LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  buttonText: string
  buttonLink: string
  gradientFrom: string
  gradientTo: string
}

export function FeatCard({
  title,
  description,
  icon: Icon,
  buttonText,
  buttonLink,
  gradientFrom,
  gradientTo
}: FeatureCardProps) {
  return (
    <Card 
      className={`group relative overflow-hidden bg-gradient-to-br text-slate-300 transition-all hover:shadow-2xl`}
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`,
      }}
    >
      <CardHeader className="p-8">
        <CardTitle className="flex items-center gap-3 text-3xl">
          <Icon className="h-10 w-10" />
          {title}
        </CardTitle>
        <CardDescription className="mt-4 text-xl text-white/80">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <Button 
          className="w-full text-lg py-6 bg-white/20 hover:bg-white/30 transition-colors duration-300"
          onClick={() => window.location.href = buttonLink}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}

