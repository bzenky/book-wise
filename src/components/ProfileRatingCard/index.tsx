import { renderRating } from "@/utils/renderRating"
import { Ratings } from "@/pages/profile/[slug]"
import { dateDistanceToNow } from "@/utils/dateDistanceToNow"
import { BookInfoWrapper, Card, Container, Header, RatingWrapper } from "./styles"

interface ProfileRatingProps {
  rating: Ratings
}

export function ProfileRatingCard({ rating }: ProfileRatingProps) {
  return (
    <Container>
      <span>{dateDistanceToNow(new Date(rating.created_at))}</span>

      <Card>
        <Header>
          <img
            src={rating.book.cover_url}
            width="98"
            height="134"
            alt="Livro"
          />

          <BookInfoWrapper>
            <div>
              <h6>{rating.book.name}</h6>
              <span>{rating.book.author}</span>
            </div>

            <RatingWrapper>
              {renderRating(rating.rate)}
            </RatingWrapper>
          </BookInfoWrapper>
        </Header>

        <p>{rating.description}</p>
      </Card>
    </Container>
  )
}