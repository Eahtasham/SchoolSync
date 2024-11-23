"use client";

import * as React from "react";
import {
  BookOpen,
  User,
  Users,
  School,
  Calendar,
  Settings2,
  LifeBuoy,
  Send,
  Command,
} from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavSecondary } from "@/components/sidebar/nav-secondary";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "ddc",
    email: "ddc@schoolsync.com",
    avatar: "https://github.com/durjoydutta.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: User,
      isActive: true,
      items: [],
    },
    {
      title: "Students",
      url: "/students",
      icon: Users,
      items: [
        {
          title: "All Students",
          url: "/students/all",
        },
        {
          title: "Admissions",
          url: "/students/admissions",
        },
        {
          title: "Performance",
          url: "/students/performance",
        },
      ],
    },
    {
      title: "Teachers",
      url: "/teachers",
      icon: School,
      items: [
        {
          title: "All Teachers",
          url: "/teachers/all",
        },
        {
          title: "Schedules",
          url: "/teachers/schedules",
        },
        {
          title: "Reports",
          url: "/teachers/reports",
        },
      ],
    },
    {
      title: "Classes",
      url: "/classes",
      icon: Calendar,
      items: [
        {
          title: "Class Timetable",
          url: "/classes/timetable",
        },
        {
          title: "Attendance",
          url: "/classes/attendance",
        },
        {
          title: "Assignments",
          url: "/classes/assignments",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        {
          title: "General Settings",
          url: "/settings/general",
        },
        {
          title: "User Management",
          url: "/settings/users",
        },
        {
          title: "Billing",
          url: "/settings/billing",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">SchoolSync</span>
                  <span className="truncate text-xs">Management Systems</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="sm:hidden">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
