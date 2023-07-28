import { theme } from "@/styles/stitches.config"
import { Star } from "lucide-react"
import { Button, Container } from "./styles"

interface Props {
  averageRating: number
  setAverageRating: (value: number) => void
  disabled?: boolean
}

export function ReviewRate({ averageRating, setAverageRating, disabled = false }: Props) {
  const floorAverage = Math.floor(averageRating)
  const stars = Array.apply(null, Array(5)).map(function (x, i) { return i })

  function handleReviewRate(star: number) {
    if (averageRating === star + 1) {
      return setAverageRating(0)
    }

    setAverageRating(star + 1)
  }

  return (
    <Container>
      {stars.map(star => {
        return star < floorAverage ? (
          <Button key={star} disabled={disabled} onClick={() => handleReviewRate(star)}>
            <Star
              key={star}
              size={24}
              color={String(theme.colors.purple100)}
              fill={String(theme.colors.purple100)}
            />
          </Button>
        ) : (
          <Button key={star} disabled={disabled} onClick={() => handleReviewRate(star)}>
            <Star
              key={star}
              size={24}
              color={String(theme.colors.purple100)}
            />
          </Button>
        )
      })}
    </Container>
  )
}