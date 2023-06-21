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
      book: {
        include: {
          categories: true,
        }
      }
    }
  })

  const booksCategories = await prisma.category.groupBy({
    by: ['id', 'name'],
    where: {
      id: {
        in: ratings.map(rating => rating.book.categories.map(category => category.categoryId)).flat()
      }
    }
  })

  const userData = user.map(user => {
    const ratingsWithCategories = ratings.map(rating => {
      const bookCategory = booksCategories.filter(category => category.id === rating.book.categories.map(category => category.categoryId).flat()[0])
      const { book, ...ratingInfo } = rating

      return {
        ...ratingInfo,
        book: {
          ...book,
          categories: bookCategory?.map(category => category.name),
        }
      }
    })

    const ratingsByUser = ratingsWithCategories.filter(rating => rating.user_id === user.id)

    return {
      ...user,
      ratings: ratingsByUser,
    }
  })[0]

  return res.json({ userData })
}