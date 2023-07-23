import { Check, X } from "lucide-react"
import { ActionButton, ActionWrapper, Container, Header, RatingStarWrapper, TextField, TextFieldWrapper } from "./styles"
import { theme } from "@/styles/stitches.config"
import { useState } from "react"
import { Avatar } from "../Avatar"
import { renderRating } from "@/utils/renderRating"

interface ReviewCardProps {
  showComponent: (value: boolean) => void
}

export function ReviewCard({ showComponent }: ReviewCardProps) {
  const [review, setReview] = useState('')

  function handleCancelReview() {
    setReview('')
    showComponent(false)
  }

  return (
    <Container>
      <Header>
        <Avatar
          name="Xab Lau"
          avatarUrl="https://www.github.com/bzenky.png"
          size="sm"
        />

        <strong>Xab Lau</strong>

        <RatingStarWrapper>
          {renderRating(0)}
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

        <ActionButton disabled={review.length === 0}>
          <Check size={24} color={theme.colors.green100 as unknown as string} />
        </ActionButton>
      </ActionWrapper>
    </Container>
  )
}