"use client";
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import { MoreHorizontal } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [ // Data for the chart
  {
    name: 'Total',
    count: 420,
    fill: 'hsl(var(--background))',
  },
  {
    name: 'Girls',
    count: 200,
    fill: "#FAE27C",
  },
  {
    name: 'Boys',
    count: 220,
    fill: "#C3EBFA",
  },
];


const RatioChart = () => {
  return (
    <Card className="bg-white dark:bg-stone-800 rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Student Ratio</h1>
        <MoreHorizontal className="h-8 w-8 text-gray-500"/>
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold">220</h1>
          <h2 className="text-xs text-gray-300">Boys (52%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold">200</h1>
          <h2 className="text-xs text-gray-300">Girls (48%)</h2>
        </div>
      </div>
    </Card>

  )
}

export default RatioChart