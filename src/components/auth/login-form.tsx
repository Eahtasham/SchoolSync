"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SignIn } from '@clerk/nextjs'


interface LoginFormProps {
    onToggle: () => void
}

export default function LoginForm({ onToggle }: LoginFormProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle login logic here
        console.log("Login submitted", { email, password })
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
        >
            <h2 className="text-2xl font-bold mb-6">Log in</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-gray-700 dark:border-white"
                        required
                    />
                </div>
                <Button type="submit" className="w-full">Log in</Button>
            </form>
            <p className="flex gap-2  justify-center items-center mt-4 text-center text-sm">
                Don&apos;t have an account?
                <button onClick={onToggle} className="text-primary hover:underline">
                    Sign up
                </button>
            </p>
        </motion.div>
    )
}

// import { SignIn } from '@clerk/nextjs'

// export default function LoginForm() {
//   return <SignIn />
// }