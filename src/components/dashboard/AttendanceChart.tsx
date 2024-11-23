"use client";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image';

const data = [
    {
        name: "Mon",
        present: 69,
        absent: 31,
    },
    {
        name: "Tue",
        present: 70,
        absent: 60,
    },
    {
        name: "Wed",
        present: 90,
        absent: 75,
    },
    {
        name: "Thu",
        present: 90,
        absent: 75,
    },
    {
        name: "Fri",
        present: 31,
        absent: 69,
    },
];

const AttendanceChart = () => {
    return (
        <Card className="bg-white dark:bg-stone-800 rounded-xl w-full h-full p-4 mb-3">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart width={500} height={300} data={data} barSize={18}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tick={{ fill: "#d1d5db" }}
                        tickLine={false}
                    />
                    <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                    <Tooltip
                        contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
                    />
                    <Legend
                        align="left"
                        verticalAlign="top"
                        wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
                    />
                    <Bar
                        dataKey="present"
                        fill="#53F0BC"
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar
                        dataKey="absent"
                        fill="#f79cad"
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </Card>
    )
}

export default AttendanceChart