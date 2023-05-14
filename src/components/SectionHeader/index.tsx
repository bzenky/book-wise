import { ChevronRight } from "lucide-react"
import { Container } from "./styles"

interface SectionHeaderProps {
  text: string
  hasAction?: boolean
  actionText?: string
  actionFunction?: () => void
}

export function SectionHeader({
  text,
  hasAction = false,
  actionText,
  actionFunction
}: SectionHeaderProps) {
  return (
    <Container>
      <span>{text}</span>

      {hasAction && (
        <button onClick={actionFunction}>
          {actionText}
          <ChevronRight size={20} />
        </button>
      )}
    </Container>
  )
}