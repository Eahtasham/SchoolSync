"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal } from 'lucide-react'

// Event type definition
type Event = {
  id: number
  title: string
  time: string
  description: string
  date: Date
}

// Sample events data
const events: Event[] = [
  {
    id: 1,
    title: "Parent-Teacher Meeting",
    time: "10:00 AM - 12:00 PM",
    description: "Monthly meeting to discuss student progress and concerns.",
    date: new Date(), // use yyyy-mm-dd for custom dates
  },
  {
    id: 2,
    title: "Science Exhibition",
    time: "9:00 AM - 4:00 PM",
    description: "Annual event showcasing student science projects and experiments.",
    date: new Date(),
  },
  {
    id: 3,
    title: "Sports Day Rehearsal",
    time: "8:00 AM - 10:00 AM",
    description: "Practice session for students participating in Sports Day events.",
    date: new Date(),
  },
  {
    id: 4,
    title: "Sports Day Rehearsal",
    time: "8:00 AM - 10:00 AM",
    description: "Practice session for students participating in Sports Day events.",
    date: new Date("2024-12-24"),
  },
  {
    id: 5,
    title: "Science Exhibition",
    time: "2:00 PM - 4:00 PM",
    description: "Practice session for students participating in Sports Day events.",
    date: new Date("2024-12-24"),
  },
]

export default function EventCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Filter events for the selected date
  const selectedDateEvents = events.filter(
    (event) => event.date.toDateString() === date?.toDateString()
  )

  return (
    <Card className="w-full pt-4 dark:bg-stone-800">
      <CardContent className="w-full gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Events</h2>
          <MoreHorizontal className="h-8 w-8 text-gray-500" />
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full rounded-md"
          classNames={{
            months:
              "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
            month: "space-y-4 w-full flex flex-col",
            table: "w-full h-full border-collapse space-y-1",
            head_row: "",
            row: "w-full mt-2",
            day_today: "w-full",
            day_selected: "bg-lamaPurple w-full",
          }}
        />
        <div className="flex flex-col gap-4 items-center mt-2">
          {selectedDateEvents.length > 0 ? (
            selectedDateEvents.map((event) => (
              <div
                key={event.id}
                className="w-full rounded-md border-2 border-gray-100 border-t-4 odd:border-t-blue-400 even:border-t-purple-400 p-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-600 dark:text-slate-300">{event.title}</h3>
                  <span className="text-gray-400 text-xs">{event.time}</span>
                </div>
                <p className="mt-2 text-gray-500 dark:text-slate-400 text-sm">{event.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No events for this date.</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}