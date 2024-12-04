"use client"

import { useEffect, useState } from "react"
import { GalleryVerticalEnd } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import DarkModeSwitch from "@/components/DarkModeSwitch"
import { motion, AnimatePresence } from "framer-motion"
import LoginForm from "@/components/auth/login-form"
import SignInForm from "@/components/auth/signin-form"



export default function AuthLayout() {
    const [isLogin, setIsLogin] = useState(false)

    return (
        <div className="relative grid min-h-svh md:grid-cols-2">
            {/* LEFT */}
            <motion.div
                className="relative flex flex-col gap-4 p-6 md:p-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="flex justify-center gap-2 md:justify-start"
                    whileHover={{ scale: 1.05 }}
                >
                    <Link href="/" className="flex items-center gap-2 text-md md:text-lg font-semibold">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <GalleryVerticalEnd className="size-6" />
                        </div>
                        SchoolSync
                    </Link>
                </motion.div>
                <motion.div
                    className="flex flex-1 items-center justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <div className="w-full">
                        <AnimatePresence mode="wait">
                            {/* {isLogin ? (
                                <LoginForm key="login" onToggle={() => setIsLogin(false)} />
                            ) : (
                                <SignupForm key="signup" onToggle={() => setIsLogin(true)} />
                            )} */}
                          <SignInForm />
                        </AnimatePresence>

                    </div>
                </motion.div>
            </motion.div>
            {/* RIGHT */}
            <div className="relative hidden bg-muted md:block">
                <Image
                    src="/assets/school-supplies.jpg"
                    alt="login-page-image"
                    fill
                    className="absolute inset-0 object-cover dark:brightness-[0.2] grayscale-[30%] dark:grayscale-[95%]"
                    sizes="100vw"
                />
                <motion.div
                    className="absolute inset-0 flex items-center justify-center p-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <p className="text-white text-2xl font-semibold text-center leading-relaxed shadow-text">
                        Experience the future of education with our comprehensive platform that seamlessly connects Teachers, Students, and Parents.
                    </p>
                </motion.div>
            </div>
            <motion.div
                className="absolute top-[1.6rem] md:top-[2.4rem] right-7 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
            >
                <DarkModeSwitch />
            </motion.div>
        </div>
    );
}