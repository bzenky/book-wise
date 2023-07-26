import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(405).end

  await prisma.rating.create({
    data: {
      description: req.body.description,
      rate: req.body.rate,
      book_id: req.body.book_id,
      user_id: req.body.user_id,
    }
  })

  return res.json({ message: 'Rating created.' })
}