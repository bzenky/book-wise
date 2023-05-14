import { Star } from "lucide-react"
import { BookCover, BookInfo, BookInfoWrapper, Card, RatingWrapper } from "./styles"
import { theme } from "@/styles/stitches.config"

export function RatingCardMinimal() {
  return (
    <Card>
      <BookCover
        src="https://m.media-amazon.com/images/I/519kRFUvDOL._SX356_BO1,204,203,200_.jpg"
        alt="Capa do livro"
      />

      <BookInfoWrapper>
        <BookInfo>
          <h5>Pai Rico, Pai Pobre</h5>
          <span>Robert T. Kiyosaki</span>
        </BookInfo>

        <RatingWrapper>
          <Star size={18} color={String(theme.colors.purple100)} fill={String(theme.colors.purple100)} />
          <Star size={18} color={String(theme.colors.purple100)} fill={String(theme.colors.purple100)} />
          <Star size={18} color={String(theme.colors.purple100)} fill={String(theme.colors.purple100)} />
          <Star size={18} color={String(theme.colors.purple100)} fill={String(theme.colors.purple100)} />
          <Star size={18} color={String(theme.colors.purple100)} />
        </RatingWrapper>
      </BookInfoWrapper>
    </Card>
  )
}