"use client";

import * as React from "react";
import {
  House,
  BookOpen,
  User,
  Users,
  School,
  Calendar,
  Settings2,
  LifeBuoy,
  Send,
  Command,
  UsersRound,
  GalleryVerticalEnd,
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
import { useUser } from "@clerk/nextjs";

const adminData = {
  user: {
    name: "Admin User",
    email: "admin@schoolsync.com",
    avatar: "https://github.com/admin.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: BookOpen,
      isActive: true,
      items: [],
    },
    {
      title: "Students",
      url: "/student",
      icon: Users,
      items: [
        { title: "All Students", url: "/list/students" },
        { title: "Admissions", url: "/students/admissions" },
        { title: "Performance", url: "/students/performance" },
      ],
    },
    {
      title: "Teachers",
      url: "/teacher",
      icon: School,
      items: [
        { title: "All Teachers", url: "/list/teachers" },
        { title: "Schedules", url: "/teachers/schedules" },
        { title: "Reports", url: "/teachers/reports" },
      ],
    },
    {
      title: "Parents",
      url: "/parents",
      icon: UsersRound,
      items: [
        { title: "All Parents", url: "/list/parents" },
        { title: "Reports", url: "/teachers/reports" },
      ],
    },
    {
      title: "Academics",
      url: "/academics",
      icon: Calendar,
      items: [
        { title: "Classes", url: "/list/classes" },
        { title: "Lessons", url: "/list/lessons" },
        { title: "Assignments", url: "/list/assignments" },
        { title: "Exams", url: "/list/exams" },
        { title: "Results", url: "/list/results" },
      ],
    },
    {
      title: "Communication",
      url: "/communication",
      icon: Settings2,
      items: [
        { title: "Video Meeting", url: "/list/meeting" },
        { title: "Chat Message", url: "/list/message" },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        { title: "General Settings", url: "/settings/general" },
        { title: "User Management", url: "/settings/users" },
        { title: "Billing", url: "/settings/billing" },
      ],
    },
  ],
  navSecondary: [
    { title: "Support", url: "/support", icon: LifeBuoy },
    { title: "Feedback", url: "/feedback", icon: Send },
  ],
};

const studentData = {
  user: {
    name: "Student User",
    email: "student@schoolsync.com",
    avatar: "https://github.com/student.png",
  },
  navMain: [
    {
      title: "Academics",
      url: "/list/classes",
      icon: Calendar,
      items: [
        { title: "Classes", url: "/list/classes" },
        { title: "Lessons", url: "/list/lessons" },
        { title: "Assignments", url: "/list/assignments" },
        { title: "Exams", url: "/list/exams" },
        { title: "Results", url: "/list/results" },
      ],
    },
    {
      title: "Communication",
      url: "/",
      icon: Settings2,
      items: [
        { title: "Video Meeting", url: "/list/meeting" },
        { title: "Chat Message", url: "/list/message" },
      ],
    },
  ],
  navSecondary: [
    { title: "Support", url: "/support", icon: LifeBuoy },
    { title: "Feedback", url: "/feedback", icon: Send },
  ],
};

const teacherData = {
  user: {
    name: "Teacher User",
    email: "teacher@schoolsync.com",
    avatar: "https://github.com/teacher.png",
  },
  navMain: [
    {
      title: "Students",
      url: "/student",
      icon: Users,
      items: [
        { title: "All Students", url: "/list/students" },
        { title: "Performance", url: "/students/performance" },
      ],
    },
    {
      title: "Academics",
      url: "/list/classes",
      icon: Calendar,
      items: [
        { title: "Classes", url: "/list/classes" },
        { title: "Lessons", url: "/list/lessons" },
        { title: "Assignments", url: "/list/assignments" },
        { title: "Exams", url: "/list/exams" },
        { title: "Results", url: "/list/results" },
      ],
    },
    {
      title: "Communication",
      url: "/",
      icon: Settings2,
      items: [
        { title: "Video Meeting", url: "/list/meeting" },
        { title: "Chat Message", url: "/list/message" },
      ],
    },
  ],
  navSecondary: [
    { title: "Support", url: "/support", icon: LifeBuoy },
    { title: "Feedback", url: "/feedback", icon: Send },
  ],
};

const parentData = {
  user: {
    name: "Parent User",
    email: "parent@schoolsync.com",
    avatar: "https://github.com/parent.png",
  },
  navMain: [
    {
      title: "Communication",
      url: "/",
      icon: Settings2,
      items: [
        { title: "Video Meeting", url: "/list/meeting" },
        { title: "Chat Message", url: "/list/message" },
      ],
    },
    {
      title: "Academics",
      url: "/list/classes",
      icon: Calendar,
      items: [
        { title: "Exams", url: "/list/exams" },
        { title: "Results", url: "/list/results" },
      ],
    },
  ],
  navSecondary: [
    { title: "Support", url: "/support", icon: LifeBuoy },
    { title: "Feedback", url: "/feedback", icon: Send },
  ],
};



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isLoaded, isSignedIn, user } = useUser();
  const role = user?.publicMetadata?.role; // Fetch role from user metadata
  console.log(role);

  // Default to adminData if no role is defined
  let selectedData = adminData;

  const name = user?.username || "Guest";
  const email = user?.primaryEmailAddress?.emailAddress || "guest@schoolsync.com";
  const avatar = user?.imageUrl || "https://via.placeholder.com/150"; // Placeholder avatar if none is provided


  // Determine data based on role
  switch (role) {
    case "student":
      selectedData = studentData;
      break;
    case "teacher":
      selectedData = teacherData;
      break;
    case "parent":
      selectedData = parentData;
      break;
    case "admin":
    default:
      selectedData = adminData;
      break;
  }

  return (
    <Sidebar variant="sidebar" {...props}>
      <SidebarHeader className="pt-[1.3rem]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <GalleryVerticalEnd className="size-6" />
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
      <SidebarContent className="space-y-4">
        <NavMain items={selectedData.navMain} />
        <NavSecondary items={selectedData.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser           user={{
            name,
            email,
            avatar,
          }} />
      </SidebarFooter>
    </Sidebar>
  );
}
