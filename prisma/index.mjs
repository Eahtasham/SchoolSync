import { PrismaClient } from '@prisma/client'
import { writeQuery } from '@prisma/client/sql'

const prisma = new PrismaClient()

const query = await prisma.$queryRawTyped(writeQuery())
console.log(query)