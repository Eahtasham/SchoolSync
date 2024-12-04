"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { Pie, PieChart, Cell, ResponsiveContainer, Legend } from "recharts"
import { MoreHorizontal } from 'lucide-react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { person: "Male", count: 420, fill: "hsl(var(--chart-1))" },
    { person: "Female", count: 200, fill: "hsl(var(--chart-5))" },
]

const chartConfig = {
    Participants: {
        label: "Students",
    },
    Male: {
        label: "Male",
    },
    Female: {
        label: "Female",
    },
} satisfies ChartConfig


export default function MaleFemaleRatioPieChart() {
    const totalCount = chartData.reduce((sum, entry) => sum + entry.count, 0)
    const malePercentage = ((chartData[0].count / totalCount) * 100).toFixed(1)
    const femalePercentage = ((chartData[1].count / totalCount) * 100).toFixed(1)
    const trend = parseFloat(malePercentage) > parseFloat(femalePercentage) ?
        { direction: "up" as const, value: (parseFloat(malePercentage) - parseFloat(femalePercentage)).toFixed(1) } :
        { direction: "down" as const, value: (parseFloat(femalePercentage) - parseFloat(malePercentage)).toFixed(1) }

    return (
        <Card className="flex flex-col h-full justify-between">
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:900158266. */}
            <CardHeader className="flex-row items-center justify-between pb-2 -m-1">
                <CardTitle>Student Ratio</CardTitle>
                <MoreHorizontal className="h-8 w-8" />
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-full max-w-xs pb-0 [&_.recharts-pie-label-text]:fill-foreground"
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                            <Pie
                                data={chartData}
                                dataKey="count"
                                nameKey="person"
                                cx="50%"
                                cy="50%"
                                labelLine={true}
                                label
                                outerRadius="80%"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Male ratio {trend.direction === "up" ? "higher" : "lower"} by {trend.value}%
                    {trend.direction === "up" ?
                        <TrendingUp className="h-4 w-4 text-green-500" /> :
                        <TrendingDown className="h-4 w-4 text-red-500" />
                    }
                </div>
                <div className="leading-none text-muted-foreground">
                    Total {chartConfig.Participants.label}: {totalCount}
                </div>
            </CardFooter>
        </Card>
    )
}

