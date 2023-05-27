import { renderRating } from "@/utils/renderRating"
import {
  BookCover,
  BookInfo,
  BookInfoWrapper,
  Card,
  RatingWrapper
} from "./styles"

interface BookProps {
  author: string
  averageRating: number
  cover: string
  name: string
  variant: 'small' | 'base'
}

export function RatingCardMinimal({
  author,
  averageRating,
  cover,
  name,
  variant
}: BookProps) {
  return (
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
  )
}