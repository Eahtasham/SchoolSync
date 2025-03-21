import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal } from 'lucide-react'
import prisma from "@/lib/prisma";

const UserCard = async ({
  type,
}: {
  type: "admin" | "teacher" | "student" | "parent";
}) => {
  const modelMap: Record<typeof type, any> = {
    admin: prisma.admin,
    teacher: prisma.teacher,
    student: prisma.student,
    parent: prisma.parent,
  };

  const data = await modelMap[type]?.count();

  return (
    <Card className="rounded-2xl odd:bg-lamaPurple even:bg-lamaGreenLight dark:bg-stone-800 p-4 flex-1 min-w-[130px] xl:h-[9.25rem]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white dark:bg-lamaYellow px-2 py-1 rounded-full text-green-600">
          2024-25
        </span>
        <MoreHorizontal className="h-8 w-8" />
      </div>
      <h1 className="text-2xl font-semibold my-4">{data}</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </Card>
  );
};

export default UserCard;