'use client'

import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import BackgroundAnimation from '../BackgroundAnimation'

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            id='hero'
            className="relative hero h-svh md:pb-[10rem] flex flex-col justify-center items-center text-center gap-4 px-4"
        >
            {/* <div className="hidden md:block"><BackgroundAnimation /></div> */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                }}
            >
                <Badge
                    variant="secondary"
                    className="px-3 py-1 text-xs lg:text-sm font-medium bg-smoke-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-md border-none"
                >
                    <motion.span
                        animate={{
                            opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        Transforming Education
                    </motion.span>
                </Badge>
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mx-auto text-6xl md:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-3"
            >
                SchoolSync
            </motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-800 dark:text-gray-100"
            >
                Next-Gen School Management
            </motion.p>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl lg:max-w-4xl mx-auto"
            >
                Experience the future of education with our comprehensive platform that seamlessly connects Teachers, Students, and Parents.
            </motion.p>
        </motion.div>
    )
}

export default Hero

