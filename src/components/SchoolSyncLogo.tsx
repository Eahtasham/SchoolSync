"use client"
import { GalleryVerticalEnd } from 'lucide-react';
import Link from "next/link";

const SchoolSyncLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 text-md md:text-lg font-semibold">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <GalleryVerticalEnd className="size-6" />
      </div>
      SchoolSync
    </Link>
  )
}

export default SchoolSyncLogo