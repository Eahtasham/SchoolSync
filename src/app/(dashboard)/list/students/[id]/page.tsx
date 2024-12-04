import prisma from "@/lib/prisma";

const SingleStudentPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {

  const student = await prisma.student.findFirst({
    where: {
      id: parseInt(id),
    },
    include: {
      parent: true,
      class: true,
      grade: true,
      attendances: true,
      results: true,
    },
  })
  
  return (
    <div key={id} className="flex flex-col justify-center items-center h-svh gap-4">
      <div className="">Student Name: {student?.name}</div>
      <div className="">Parent Name: {student?.parent.name}</div>
      <div className="">Class Name: {student?.class.name}</div>
    </div>
  )
}

export default SingleStudentPage;