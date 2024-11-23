'use client'

import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero min-h-screen flex flex-col justify-center items-center text-center gap-4 px-4"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    boxShadow: [
                        '0 0 5px theme(colors.blue.500)',
                        '0 0 10px theme(colors.blue.500)',
                        '0 0 15px theme(colors.blue.500)',
                        '0 0 20px theme(colors.blue.500)',
                        '0 0 10px theme(colors.blue.500)'
                    ]
                }}
                transition={{
                    duration: 1.5,
                    delay: 0.2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    type: 'tween'
                }}
                className="rounded-full"
            >
                <Badge
                    variant="outline"
                    className="px-4 py-1 rounded-full text-sm lg:text-md animate-fade-in border-blue-500 text-blue-600 dark:text-lamaGreenLight dark:border-white"
                >
                    Transforming Education
                </Badge>
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mx-auto text-6xl xl:text-8xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-3"
            >
                SchoolSync
            </motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl xl:text-5xl font-semibold text-gray-800 dark:text-gray-100"
            >
                Next-Gen School Management
            </motion.p>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl lg:max-w-4xl mx-auto"
            >
                Experience the future of education management with our comprehensive platform that seamlessly connects teachers, students, and parents.
            </motion.p>
        </motion.div>
    )
}

export default Hero

