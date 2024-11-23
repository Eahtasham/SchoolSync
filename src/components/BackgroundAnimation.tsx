'use client'
import { motion } from 'framer-motion'

const BackgroundAnimation = () => (
    <div className="absolute inset-0 z-[-1] overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  )

export default BackgroundAnimation;