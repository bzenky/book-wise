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
}

export function RatingCardMinimal({ author, averageRating, cover, name }: BookProps) {
  return (
    <Card>
      <BookCover
        src={cover}
        alt={`Capa do livro - ${name}`}
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