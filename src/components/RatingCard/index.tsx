import { Star } from "lucide-react"
import { Avatar } from "../Avatar"
import { theme } from "@/styles/stitches.config"
import {
  BookCover,
  BookInfoWrapper,
  Card,
  Header,
  InfoWrapper,
  RatingWrapper,
  ReviewContent,
  ReviewWrapper,
  UserWrapper
} from "./styles"

export function RatingCard() {
  return (
    <Card>
      <Header>
        <UserWrapper>
          <Avatar
            avatarUrl="https://www.github.com/bzenky.png"
            name='Bruno Zenky'
          />

          <InfoWrapper>
            <h3>Bruno Zenky</h3>

            <span>Hoje</span>
          </InfoWrapper>
        </UserWrapper>

        <RatingWrapper>
          <Star size={20} color={String(theme.colors.purple100)} fill={String(theme.colors.purple100)} />
          <Star size={20} color={String(theme.colors.purple100)} fill={String(theme.colors.purple100)} />
          <Star size={20} color={String(theme.colors.purple100)} fill={String(theme.colors.purple100)} />
          <Star size={20} color={String(theme.colors.purple100)} fill={String(theme.colors.purple100)} />
          <Star size={20} color={String(theme.colors.purple100)} />
        </RatingWrapper>
      </Header>

      <ReviewWrapper>
        <BookCover
          src="https://http2.mlstatic.com/D_NQ_NP_988292-MLB51145272128_082022-O.webp"
          alt="Livro"
          width={108}
          height={152}
        />

        <ReviewContent>
          <BookInfoWrapper>
            <h4>A Divina Comédia</h4>
            <span>Dante Alighieri</span>
          </BookInfoWrapper>

          <p>O livro relata a viagem de Dante ao Inferno, ao Purgatório e ao Paraíso. O poeta Virgílio o acompanha tanto ao inferno – um vale nas entranhas da terra – como ao Purgatório, local onde as almas se purificam dos pecados capitais. Beatriz, a musa de Dante, o conduz ao Paraíso, formado por nove céus.</p>
        </ReviewContent>
      </ReviewWrapper>
    </Card>
  )
}