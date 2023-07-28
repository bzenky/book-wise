import { Check, X } from "lucide-react"
import { ActionButton, ActionWrapper, Container, Header, RatingStarWrapper, TextField, TextFieldWrapper } from "./styles"
import { theme } from "@/styles/stitches.config"
import { useState } from "react"
import { Avatar } from "../Avatar"
import { useSession } from "next-auth/react"
import { api } from "@/lib/axios"
import { ReviewRate } from "../ReviewRate"
import { BookProps } from "../RatingCardMinimal"

interface ReviewCardProps {
  showComponent: (value: boolean) => void
  bookId: String
  refetch: () => Promise<BookProps[]>
}

export function ReviewCard({ showComponent, bookId, refetch }: ReviewCardProps) {
  const session = useSession()
  const [review, setReview] = useState('')
  const [reviewRate, setReviewRate] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

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
    setIsLoading(true)
    try {
      await api.post('/ratings/rate', data)
      await refetch()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
      showComponent(false)
      setReview('')
      setReviewRate(0)
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
            disabled={isLoading}
          />
        </RatingStarWrapper>
      </Header>

      <TextFieldWrapper>
        <TextField
          maxLength={450}
          value={review}
          onChange={event => setReview(event.target.value)}
          disabled={isLoading}
        />

        <span>{`${review.length}/450`}</span>
      </TextFieldWrapper>

      <ActionWrapper>
        <ActionButton onClick={handleCancelReview}>
          <X size={24} color={theme.colors.purple100 as unknown as string} />
        </ActionButton>

        <ActionButton disabled={review.length === 0 || isLoading} onClick={handleSendReview}>
          <Check size={24} color={theme.colors.green100 as unknown as string} />
        </ActionButton>
      </ActionWrapper>
    </Container>
  )
}