import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end

  const popularBooks = await prisma.book.findMany({
    orderBy: {
      ratings: {
        _count: 'desc',
      },
    },
    include: {
      ratings: true,
    },
    take: 4
  })

  const booksAverageRating = await prisma.rating.groupBy({
    by: ['book_id'],
    where: {
      book_id: {
        in: popularBooks.map(book => book.id),
      }
    },
    _avg: {
      rate: true
    }
  })

  const popularBooksWithAverageRating = popularBooks.map(book => {
    const bookAverageRating = booksAverageRating.find(averageRating => averageRating.book_id === book.id)
    const { ratings, ...bookInfo } = book

    return {
      ...bookInfo,
      averageRating: bookAverageRating?._avg?.rate,
    }
  })

  return res.json({ popularBooksWithAverageRating })
}