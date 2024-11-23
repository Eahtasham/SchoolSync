'use client'

import { useRef } from 'react'
import Link from "next/link"
import { motion, useInView } from 'framer-motion'
import { Button } from "@/components/ui/button"

const GetStartedButton = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <Link href="#navbar">
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center hover:from-blue-700 hover:to-indigo-700"
        >
          Go To The Top
        </Button>
      </Link>
    </motion.div>
  )
}

export default GetStartedButton

