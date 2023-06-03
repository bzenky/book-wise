import { renderRating } from "@/utils/renderRating"
import { BookInfoWrapper, Card, Container, Header, RatingWrapper } from "./styles"

export function ProfileRatingCard() {
  return (
    <Container>
      <span>Há 2 dias</span>

      <Card>
        <Header>
          <img
            src="/images/books/codigo-limpo.png"
            width="98"
            height="134"
            alt="Livro"
          />

          <BookInfoWrapper>
            <div>
              <h6>Código Limpo</h6>
              <span>Robert C. Martin</span>
            </div>

            <RatingWrapper>
              {renderRating(4)}
            </RatingWrapper>
          </BookInfoWrapper>
        </Header>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis consequatur dicta dolor beatae quas nobis eos rerum in sunt laborum necessitatibus quam, temporibus voluptatem laudantium doloremque recusandae eaque eum deleniti?</p>
      </Card>
    </Container>
  )
}