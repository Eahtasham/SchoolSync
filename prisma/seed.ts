import { Day, UserSex } from "@prisma/client";
import  prisma  from "@/lib/prisma";

async function main() {
    // ADMINS
    const adminData = [
        {
            username: "durjoydc",
            email: "durjoy.dutta@gmail.com",
            phone: "9876543210",
            name: "Durjoy",
            surname: "Dutta",
            password: "Admin",
        },
        {
            username: "eahtashamummam",
            email: "eahtasham.ummam@gmail.com",
            phone: "9123456789",
            name: "Eahtasham",
            surname: "Ummam",
            password: "Admin",
        },
    ];

    for (const admin of adminData) {
        await prisma.admin.create({ data: admin });
    }

    // GRADE
    for (let i = 1; i <= 6; i++) {
        await prisma.grade.create({
            data: {
                level: i,
            },
        });
    }

    // CLASS
    for (let i = 1; i <= 6; i++) {
        await prisma.class.create({
            data: {
                name: `${i}A`,
                gradeId: i,
                capacity: Math.floor(Math.random() * (30 - 20 + 1)) + 20,
            },
        });
    }

    // SUBJECT
    const subjectData = [
        { name: "Mathematics" },
        { name: "Science" },
        { name: "English" },
        { name: "History" },
        { name: "Geography" },
        { name: "Physics" },
        { name: "Chemistry" },
        { name: "Biology" },
        { name: "Computer Science" },
        { name: "Art" },
    ];

    for (const subject of subjectData) {
        await prisma.subject.create({ data: subject });
    }

    // TEACHER
    const teacherNames = [
        { name: "Arun", surname: "Sharma" },
        { name: "Pooja", surname: "Mehta" },
        { name: "Raj", surname: "Kumar" },
        { name: "Anjali", surname: "Verma" },
        { name: "Suresh", surname: "Rana" },
        { name: "Kiran", surname: "Desai" },
        { name: "Amit", surname: "Singh" },
        { name: "Priya", surname: "Patil" },
        { name: "Ravi", surname: "Malhotra" },
        { name: "Neha", surname: "Bose" },
        { name: "Vikas", surname: "Yadav" },
        { name: "Swati", surname: "Chawla" },
        { name: "Manoj", surname: "Agarwal" },
        { name: "Sonal", surname: "Pandey" },
        { name: "Vivek", surname: "Joshi" },
    ];

    for (let i = 1; i <= 15; i++) {
        await prisma.teacher.create({
            data: {
                username: `teacher${i}`,
                name: teacherNames[i - 1].name,
                surname: teacherNames[i - 1].surname,
                email: `teacher${i}@school.com`,
                phone: `91${9000000000 + i}`, // Unique phone numbers
                address: `House No ${i}, Block ${i % 5}, Sector ${i + 5}, Delhi`,
                bloodType: i % 2 === 0 ? "B+" : "O-",
                sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
                subjects: { connect: [{ id: (i % 10) + 1 }] },
                classes: { connect: [{ id: (i % 6) + 1 }] },
                birthday: new Date(new Date().setFullYear(new Date().getFullYear() - (25 + i))),
            },
        });
    }

    // LESSON
    for (let i = 1; i <= 30; i++) {
        await prisma.lesson.create({
            data: {
                name: `Lesson ${i}`,
                day: Day[Object.keys(Day)[Math.floor(Math.random() * Object.keys(Day).length)] as keyof typeof Day],
                startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
                endTime: new Date(new Date().setHours(new Date().getHours() + 3)),
                subjectId: (i % 10) + 1,
                classId: (i % 6) + 1,
                teacherId: (i % 15) + 1,
            },
        });
    }

    // PARENT
    for (let i = 1; i <= 25; i++) {
        await prisma.parent.create({
            data: {
                username: `parent${i}`,
                name: `ParentName${i}`,
                surname: `ParentSurname${i}`,
                email: `parent${i}@school.com`,
                phone: `91${8000000000 + i}`,
                address: `Apartment ${i}, Block ${i % 5}, Noida`,
            },
        });
    }

    // STUDENT
    for (let i = 1; i <= 50; i++) {
        await prisma.student.create({
            data: {
                username: `student${i}`,
                name: `StudentName${i}`,
                surname: `StudentSurname${i}`,
                email: `student${i}@school.com`,
                phone: `91${7000000000 + i}`,
                address: `Street ${i}, Area ${i % 6}, Bangalore`,
                bloodType: "O-",
                sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
                parentId: Math.ceil(i / 2),
                gradeId: (i % 6) + 1,
                classId: (i % 6) + 1,
                birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
            },
        });
    }

    // EXAM
    for (let i = 1; i <= 10; i++) {
        await prisma.exam.create({
            data: {
                title: `Exam ${i}`,
                startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
                endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
                lessonId: (i % 30) + 1,
            },
        });
    }

    // ASSIGNMENT
    for (let i = 1; i <= 10; i++) {
        await prisma.assignment.create({
            data: {
                title: `Assignment ${i}`,
                startDate: new Date(new Date().setHours(new Date().getHours() + 1)),
                dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
                lessonId: (i % 30) + 1,
            },
        });
    }

    // RESULT
    for (let i = 1; i <= 10; i++) {
        await prisma.result.create({
            data: {
                score: Math.floor(Math.random() * 100),
                studentId: i,
                ...(i <= 5 ? { examId: i } : { assignmentId: i - 5 }),
            },
        });
    }

    // ATTENDANCE
    for (let i = 1; i <= 10; i++) {
        await prisma.attendance.create({
            data: {
                date: new Date(),
                present: true,
                studentId: i,
                lessonId: (i % 30) + 1,
            },
        });
    }

    // EVENT
    for (let i = 1; i <= 5; i++) {
        await prisma.event.create({
            data: {
                title: `Event ${i}`,
                description: `Description for Event ${i}`,
                startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
                endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
                classId: (i % 5) + 1,
            },
        });
    }

    // ANNOUNCEMENT
    for (let i = 1; i <= 5; i++) {
        await prisma.announcement.create({
            data: {
                title: `Announcement ${i}`,
                description: `Description for Announcement ${i}`,
                date: new Date(),
                classId: (i % 5) + 1,
            },
        });
    }

    console.log("Seeding completed successfully.");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
