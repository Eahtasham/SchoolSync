"use client"
import Link from "next/link"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CardsCreateAccount() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {/* <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <Icons.gitHub />
            Github
          </Button>
          <Button variant="outline">
            <Icons.google />
            Google
          </Button>
        </div> */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          {/* <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div> */}
        </div>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="teacher">Teacher</SelectItem>
            <SelectItem value="parent">Parent</SelectItem>
            <SelectItem value="student">Student</SelectItem>
          </SelectContent>
        </Select>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="messi@goat.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="worldcup@2022" />
        </div>
        <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600
         text-white hover:from-blue-700 hover:to-indigo-700
         transition-all duration-300 hover:scale-105">Create account
        </Button>
      </CardContent>
        <div className="pb-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </div>
    </Card>
  )
}