"use client"
import { School } from 'lucide-react';
import Link from "next/link";

const SchoolSyncLogo = () => {
  return (
    <Link href="/" className="flex justify-center items-center text-center">
      <div className="relative h-10 w-10">
      <School size={36} color="#561fbd" />
      </div>
    </Link>
  )
}

export default SchoolSyncLogo