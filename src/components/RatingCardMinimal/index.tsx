import { renderRating } from "@/utils/renderRating"
import {
  BookCover,
  BookInfo,
  BookInfoWrapper,
  Card,
  RatingWrapper
} from "./styles"
import { ModalBook } from "../ModalBook"

export interface BookProps {
  author: string
  averageRating: number
  countRating?: number
  totalPages?: number
  categories?: string
  cover: string
  name: string
  variant: 'small' | 'base'
}

export function RatingCardMinimal({
  author,
  averageRating,
  categories,
  countRating,
  totalPages,
  cover,
  name,
  variant
}: BookProps) {
  const data = { author, averageRating, categories, countRating, cover, name, variant, totalPages }

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