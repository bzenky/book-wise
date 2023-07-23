import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method !== 'GET') {
    return res.status(405).end
  }

  const books = await prisma.book.findMany({
    include: {
      ratings: true,
      categories: true,
    },
  })

  const booksAverageRating = await prisma.rating.groupBy({
    by: ['book_id'],
    where: {
      book_id: {
        in: books.map(book => book.id),
      }
    },
    _avg: {
      rate: true
    }
  })

  const booksCategories = await prisma.category.groupBy({
    by: ['id', 'name'],
    where: {
      id: {
        in: books.map(book => book.categories.map(category => category.categoryId)).flat()
      }
    }
  })

  const users = await prisma.user.findMany({
    orderBy: {
      created_at: 'desc',
    },
  })

  const booksWithAverageCategory = books.map(book => {
    const bookAverageRating = booksAverageRating.find(averageRating => averageRating.book_id === book.id)
    const bookCategory = booksCategories.find(category => category.id === book.categories.map(category => category.categoryId).flat()[0])
    const { ratings, ...bookInfo } = book

    const ratingsWithUser = ratings.map(rating => {
      return { ...rating, user: users.find(user => user?.id === rating.user_id) }
    })

    return {
      ...bookInfo,
      averageRating: bookAverageRating?._avg?.rate,
      ratings: ratingsWithUser,
      countRating: ratings.length,
      category: bookCategory?.name
    }
  })

  return res.json(booksWithAverageCategory)
}