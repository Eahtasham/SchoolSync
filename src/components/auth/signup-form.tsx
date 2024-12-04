"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

interface SignupFormProps {
  onToggle: () => void
}

export default function SignupForm({ onToggle }: SignupFormProps) {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [otp, setOtp] = useState("")
  const [password, setPassword] = useState("")
  const [step, setStep] = useState(1)
  const [isVerifying, setIsVerifying] = useState(false)
  const { toast } = useToast()

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerifying(true)
    // Simulating API call to send OTP
    try {
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStep(2)
      toast({
        title: "OTP Sent",
        description: "Please check your email for the OTP.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send OTP. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsVerifying(false)
    }
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerifying(true)
    // Simulating API call to verify OTP and check if email exists in database
    try {
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      // Simulating email found in database
      if (Math.random() > 0.5) {
        setStep(3)
      } else {
        toast({
          title: "Error",
          description: "Email not found for the selected role. Please contact your school administrator.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to verify OTP. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsVerifying(false)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerifying(true)
    // Simulating API call to complete signup
    try {
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast({
        title: "Success",
        description: "Your account has been created successfully.",
      })
      // Redirect to dashboard or login page
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold mb-6">Sign up</h2>
      {step === 1 && (
        <form onSubmit={handleSendOtp} className="space-y-4">
          <Select value={role} onValueChange={setRole}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="parent">Parent</SelectItem>
              <SelectItem value="student">Student</SelectItem>
            </SelectContent>
          </Select>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-gray-700 dark:border-white"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isVerifying || !role || !email}>
            {isVerifying ? "Sending OTP..." : "Send OTP"}
          </Button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="otp">Enter OTP</Label>
            <Input
              id="otp"
              type="text"
              placeholder="Enter the OTP sent to your email"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border-gray-700 dark:border-white"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isVerifying || !otp}>
            {isVerifying ? "Verifying..." : "Verify OTP"}
          </Button>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">Create Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-gray-700 dark:border-white"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isVerifying || !password}>
            {isVerifying ? "Creating Account..." : "Create Account"}
          </Button>
        </form>
      )}
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{" "}
        <button onClick={onToggle} className="text-primary hover:underline">
          Log in
        </button>
      </p>
      <Toaster />
    </motion.div>
  )
}

// import { SignUp } from '@clerk/nextjs'

// export default function Page() {
//   return <SignUp routing="path" path="/auth" />
// }