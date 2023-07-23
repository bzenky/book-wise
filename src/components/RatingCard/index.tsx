import { Avatar } from "../Avatar"
import { RatingProps } from "@/pages/dashboard"
import { renderRating } from "@/utils/renderRating"
import { dateDistanceToNow } from "@/utils/dateDistanceToNow"
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

interface RatingCardProps {
  rating: RatingProps
}

export function RatingCard({ rating }: RatingCardProps) {
  const dateFormatted = dateDistanceToNow(new Date(rating.created_at))

  return (
    <Card>
      <Header>
        <UserWrapper href={`/profile/${rating.user_id}`}>
          <Avatar
            avatarUrl={rating.user.avatar_url}
            name={rating.user.name}
          />

          <InfoWrapper>
            <h3>{rating.user.name}</h3>

            <span>{dateFormatted}</span>
          </InfoWrapper>
        </UserWrapper>

        <RatingWrapper>
          {renderRating(rating.rate)}
        </RatingWrapper>
      </Header>

      <ReviewWrapper>
        <BookCover
          src={rating.book.cover_url}
          alt={`Capa do livro - ${rating.book.name}`}
          width={108}
          height={152}
        />

        <ReviewContent>
          <BookInfoWrapper>
            <h4>{rating.book.name}</h4>
            <span>{rating.book.author}</span>
          </BookInfoWrapper>

          <p>{rating.book.summary}</p>
        </ReviewContent>
      </ReviewWrapper>
    </Card>
  )
}