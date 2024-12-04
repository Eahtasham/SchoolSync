'use client'
import { Calendar, BookOpen, ClipboardList, GraduationCap, BarChart } from 'lucide-react'
import { FeatCard } from '@/components/FeatCard'

export default function AcademicsPage() {
  const academicCards = [
    { 
      title: "Classes", 
      description: "View and manage your class schedule",
      icon: Calendar, 
      buttonText: "View Classes",
      buttonLink: "/list/classes",
      gradientFrom: "#3B82F6", 
      gradientTo: "#2563EB" 
    },
    { 
      title: "Lessons", 
      description: "Access your lesson materials and resources",
      icon: BookOpen, 
      buttonText: "View Lessons",
      buttonLink: "/list/lessons",
      gradientFrom: "#10B981", 
      gradientTo: "#059669" 
    },
    { 
      title: "Assignments", 
      description: "Check and submit your assignments",
      icon: ClipboardList, 
      buttonText: "View Assignments",
      buttonLink: "/list/assignments",
      gradientFrom: "#F59E0B", 
      gradientTo: "#D97706" 
    },
    { 
      title: "Exams", 
      description: "View exam schedules and prepare for tests",
      icon: GraduationCap, 
      buttonText: "View Exams",
      buttonLink: "/list/exams",
      gradientFrom: "#8B5CF6", 
      gradientTo: "#7C3AED" 
    },
    { 
      title: "Results", 
      description: "Check your academic performance and grades",
      icon: BarChart, 
      buttonText: "View Results",
      buttonLink: "/list/results",
      gradientFrom: "#EC4899", 
      gradientTo: "#BE185D" 
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br">
      <div className="mx-auto max-w-7xl space-y-8">
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl dark:text-gray-100">Academics</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicCards.map((card, index) => (
            <FeatCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              buttonText={card.buttonText}
              buttonLink={card.buttonLink}
              gradientFrom={card.gradientFrom}
              gradientTo={card.gradientTo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

