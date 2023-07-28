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
      categories: true,
    },
    take: 4
  })

  const booksCategories = await prisma.category.groupBy({
    by: ['id', 'name'],
    where: {
      id: {
        in: popularBooks.map(book => book.categories.map(category => category.categoryId)).flat()
      }
    }
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

  const users = await prisma.user.findMany({
    orderBy: {
      created_at: 'desc',
    },
  })

  const popularBooksWithAverageRating = popularBooks.map(book => {
    const bookAverageRating = booksAverageRating.find(averageRating => averageRating.book_id === book.id)
    const bookCategory = booksCategories.find(category => category.id === book.categories.map(category => category.categoryId).flat()[0])
    const { ratings, ...bookInfo } = book

    const ratingsWithUser = ratings.map(rating => {
      return { ...rating, user: users.find(user => user?.id === rating.user_id) }
    })

    return {
      ...bookInfo,
      ratings: ratingsWithUser,
      averageRating: bookAverageRating?._avg?.rate,
      category: bookCategory?.name
    }
  })

  return res.json({ popularBooksWithAverageRating })
}