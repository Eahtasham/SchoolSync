"use client"

import {
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar"
import { UserButton } from "@clerk/nextjs"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {

  return (
    <SidebarMenuButton
    size="lg"
    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
  >
    
    <div className="grid flex-1 text-left text-sm leading-tight ml-2">
      <span className="truncate font-semibold">{user.name}</span>
      <span className="truncate text-xs">{user.email}</span>
    </div>
    <UserButton />
  </SidebarMenuButton>
  )
}
