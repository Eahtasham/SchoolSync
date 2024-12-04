
import Announcements from "@/components/dashboard/Announcements";
import EventCalendar from "@/components/dashboard/EventCalendar";
import BigCalendar from '@/components/dashboard/BigCalendar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const TeacherPanel = () => {
  return (
    <div className="flex gap-4 flex-col lg:flex-row w-full">
      {/* LEFT */}
      <Card className="w-full xl:w-2/3 flex flex-col flex-grow gap-4">
        <CardContent className="h-full dark:bg-stone-800 p-4 rounded-xl">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <BigCalendar />
        </CardContent>
      </Card>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <EventCalendar />
        <Announcements/>
      </div>
    </div>
  )
}

export default TeacherPanel