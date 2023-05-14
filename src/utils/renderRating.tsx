import { theme } from "@/styles/stitches.config"
import { Star } from "lucide-react"

export function renderRating(averageRating: number) {
  const floorAverage = Math.floor(averageRating)
  const stars = Array.apply(null, Array(5)).map(function (x, i) { return i })

  return stars.map((star, index) => {
    if (index < floorAverage) {
      return (
        <Star
          key={star}
          size={18}
          color={String(theme.colors.purple100)}
          fill={String(theme.colors.purple100)}
        />
      )
    } else {
      return (
        <Star
          key={star}
          size={18}
          color={String(theme.colors.purple100)}
        />
      )
    }
  })
}