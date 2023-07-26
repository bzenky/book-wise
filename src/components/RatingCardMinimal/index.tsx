import { renderRating } from "@/utils/renderRating"
import {
  BookCover,
  BookInfo,
  BookInfoWrapper,
  Card,
  RatingWrapper
} from "./styles"
import { ModalBook } from "../ModalBook"

export interface UserProps {
  id: string
  email: string
  name: string
  avatar_url: string
  created_at: string
}

export interface RatingProps {
  id: string
  rate: number
  description: string
  created_at: string
  book_id: string
  user_id: string
  user: UserProps
}

export interface BookProps {
  id: string
  author: string
  averageRating: number
  ratings?: RatingProps[]
  countRating?: number
  totalPages?: number
  categories?: string
  cover: string
  name: string
  variant: 'small' | 'base'
}

export function RatingCardMinimal({
  id,
  author,
  averageRating,
  categories,
  ratings,
  countRating,
  totalPages,
  cover,
  name,
  variant
}: BookProps) {
  const data = { author, averageRating, categories, ratings, countRating, cover, name, variant, totalPages, id }

  return (
    <ModalBook data={data}>
      <Card>
        <BookCover
          src={cover}
          alt={`Capa do livro - ${name}`}
          data-variant={variant}
        />
        <BookInfoWrapper>
          <BookInfo>
            <h5>{name}</h5>
            <span>{author}</span>
          </BookInfo>
          <RatingWrapper>
            {renderRating(averageRating)}
          </RatingWrapper>
        </BookInfoWrapper>
      </Card>
    </ModalBook>
  )
}