'use client'
import { motion } from 'framer-motion'

const BackgroundAnimation = () => (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute top-1/4 left-[3%] md:top-[15%] md:left-1/4 lg:left-1/4
        transform -translate-x-1/2 -translate-y-1/2
         w-96 h-96 bg-blue-400/20
         rounded-full blur-sm"
        animate={{
          x: [0, 0, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      {/* <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-sm"
        animate={{
          x: [100, -100, 0],
          y: [250, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      /> */}
      {/* <motion.div
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
      /> */}
    </div>
  )

export default BackgroundAnimation;