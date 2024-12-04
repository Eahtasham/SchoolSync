'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { motion } from 'framer-motion'
import Link from "next/link"
import { use, useEffect } from 'react'

const SignInForm = () => {
  
  return (
    <div className="flex w-full items-center justify-center">
      
      <SignIn.Root>
        <SignIn.Step name="start" className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full space-y-6 rounded-2xl p-4"
          >
            <header className="space-y-2">
              <h2 className="text-2xl font-bold text-blue-950 dark:text-white">Sign in to SchoolSync</h2>
              <p className="text-sm text-slate-900 dark:text-gray-400">Welcome back! Please enter your details.</p>
            </header>
            <Clerk.GlobalError className="block text-sm text-red-400" />
            <div className="space-y-4">
              <Clerk.Field name="identifier" className="space-y-2">
                <Clerk.Label className="text-sm font-medium text-blue-950 dark:text-gray-300">Username</Clerk.Label>
                <Clerk.Input
                  type="text"
                  required
                  className="w-full rounded-lg bg-slate-300 dark:bg-[#141925] px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-500 outline-none ring-1 ring-gray-700 transition-all focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your username"
                />
                <Clerk.FieldError className="text-sm text-red-400" />
              </Clerk.Field>
              <Clerk.Field name="password" className="space-y-2">
                <Clerk.Label className="text-sm font-medium text-blue-950 dark:text-gray-300">Password</Clerk.Label>
                <Clerk.Input
                  type="password"
                  required
                  className="w-full rounded-lg bg-slate-300 dark:bg-[#141925] px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-500 outline-none ring-1 ring-gray-700 transition-all focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
                <Clerk.FieldError className="text-sm text-red-400" />
              </Clerk.Field>
            </div>
            <SignIn.Action
              submit
              className="w-full rounded-lg bg-[#9354ff] dark:bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#8844ff] dark:hover:bg-blue-600 "
            >
              Sign In
            </SignIn.Action>
            <motion.span
                    className="relative mb-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-950 dark:text-gray-300 flex justify-center items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <Link href="/termsofuse" className="text-sm shrink text-nowrap hover:underline">Terms of Use</Link>
                    <span className="text-sm">|</span>
                    <Link href="/privacypolicy" className="text-sm shrink text-nowrap hover:underline">Privacy Policy</Link>
            </motion.span>
          </motion.div>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  )
}

export default SignInForm

