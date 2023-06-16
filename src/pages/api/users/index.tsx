import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end

  const reqQuery = req.query
  const userId = reqQuery.id as string

  const user = await prisma.user.findMany({
    where: {
      id: userId,
    },
    orderBy: {
      created_at: 'desc',
    },
  })

  const ratings = await prisma.rating.findMany({
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: true,
    },
  })

  const userData = user.map(user => {
    const ratingsByUser = ratings.filter(rating => rating.user_id === user.id)

    return {
      ...user,
      ratings: ratingsByUser,
    }
  })

  return res.json({ userData })
}