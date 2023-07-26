import { Check, X } from "lucide-react"
import { ActionButton, ActionWrapper, Container, Header, RatingStarWrapper, TextField, TextFieldWrapper } from "./styles"
import { theme } from "@/styles/stitches.config"
import { useState } from "react"
import { Avatar } from "../Avatar"
import { useSession } from "next-auth/react"
import { api } from "@/lib/axios"
import { ReviewRate } from "../ReviewRate"

interface ReviewCardProps {
  showComponent: (value: boolean) => void
  bookId: String
}

export function ReviewCard({ showComponent, bookId }: ReviewCardProps) {
  const session = useSession()
  const [review, setReview] = useState('')
  const [reviewRate, setReviewRate] = useState(0)

  const data = {
    book_id: bookId,
    user_id: session.data?.user.id,
    rate: reviewRate,
    description: review,
  }

  function handleCancelReview() {
    setReview('')
    showComponent(false)
  }

  async function handleSendReview() {
    try {
      await api.post('/ratings/rate', data)
      setReview('')
      setReviewRate(0)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Header>
        <Avatar
          name={session.data?.user.name ?? ''}
          avatarUrl={session.data?.user.avatar_url ?? ''}
          size="sm"
        />

        <strong>{session.data?.user.name}</strong>

        <RatingStarWrapper>
          <ReviewRate
            averageRating={reviewRate}
            setAverageRating={setReviewRate}
          />
        </RatingStarWrapper>
      </Header>

      <TextFieldWrapper>
        <TextField
          maxLength={450}
          value={review}
          onChange={event => setReview(event.target.value)}
        />

        <span>{`${review.length}/450`}</span>
      </TextFieldWrapper>

      <ActionWrapper>
        <ActionButton onClick={handleCancelReview}>
          <X size={24} color={theme.colors.purple100 as unknown as string} />
        </ActionButton>

        <ActionButton disabled={review.length === 0} onClick={handleSendReview}>
          <Check size={24} color={theme.colors.green100 as unknown as string} />
        </ActionButton>
      </ActionWrapper>
    </Container>
  )
}