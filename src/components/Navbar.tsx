"use client"
import { LogIn, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SchoolSyncLogo from "@/components/SchoolSyncLogo"
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BackgroundAnimation from "@/components/BackgroundAnimation"
import { useState, useEffect } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"
import DarkModeSwitch from "@/components/DarkModeSwitch";

const data = {
    user: {
        id: 1,
        name: "ddc",
        email: "contact.durjoy@gmail.com",
        avatar: "https://github.com/durjoydutta.png",
    },
}

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true) // This should be replaced with actual auth logic
    const [userRole, setUserRole] = useState('student')
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest < lastScrollY) {
            // Scrolling up
            setIsVisible(true)
        } else if (latest > 100 && latest > lastScrollY) {
            // Scrolling down and past the 100px mark
            setIsVisible(false)
        }
        setLastScrollY(latest)
    })

    const navLoggedInStatus = () => !isLoggedIn ?
        (<Link href={"/login"}>
            <Button className="w-20 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700">
                <LogIn className="w-full h-full mr-2" />
                Login
            </Button>
        </Link>
        ) : (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ddc" className="w-full justify-start ">
                        <Avatar className="mt-[2px]">
                            <AvatarImage src={data.user.avatar} alt="User avatar" />
                            <AvatarFallback>DP</AvatarFallback>
                        </Avatar>
                        <ChevronDown className="ml-auto h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="z-[1000]">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bg-none backdrop-blur-md shadow-md py-4 px-6 z-[999]"
        >
            <BackgroundAnimation />
            <nav className="flex justify-between items-center mx-auto">
                <SchoolSyncLogo />
                <div className="flex justify-end items-center">
                    <DarkModeSwitch />
                    {navLoggedInStatus()}
                </div>
            </nav>
        </motion.header>
    )
}

export default Navbar

