'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Bell, Calendar, BarChart, GraduationCap, Users, UserCircle, BookOpen } from 'lucide-react'
import Hero from "@/components/home/Hero"
import DashboardCards from "@/components/home/DashboardCards"
import StatCards from "@/components/home/StatCards"
import FeatureCards from "@/components/home/FeatureCards"
import GetStartedButton from "@/components/home/GetStarted"
import Navbar from "@/components/navbar/MainNavbar"
import BackgroundAnimation from "@/components/BackgroundAnimation"

const Homepage = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start('visible')
  }, [controls])

  const stats = [
    { label: "Active Students", value: "2,000+" },
    { label: "Expert Teachers", value: "150+" },
    { label: "Success Rate", value: "95%" },
    { label: "Daily Classes", value: "100+" },
  ]

  const dashboards = [
    { href: "/admin", label: "Admin Dashboard", icon: Users, color: "from-blue-500 to-blue-700" },
    { href: "/teacher", label: "Teacher Portal", icon: GraduationCap, color: "from-indigo-500 to-indigo-700" },
    { href: "/parent", label: "Parent Access", icon: UserCircle, color: "from-purple-500 to-purple-700" },
    { href: "/student", label: "Student Hub", icon: BookOpen, color: "from-violet-500 to-violet-700" },
  ]

  const features = [
    { icon: Bell, title: "Instant Updates", description: "Real-time notifications about grades, attendance & events" },
    { icon: Calendar, title: "Smart Scheduling", description: "AI-powered class scheduling system" },
    { icon: BarChart, title: "Performance Analytics", description: "Detailed insights into academic progress" },
  ]

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 relative overflow-hidden z-0">
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <div className="container min-h-svh mx-auto px-4 py-12 space-y-24">
        <StatCards stats={stats} />
        <DashboardCards dashboards={dashboards} />
        <div id="features">
          <FeatureCards features={features} />
        </div>
        <GetStartedButton />
      </div>
    </div>
  )
}

export default Homepage

