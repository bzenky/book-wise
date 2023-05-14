import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

export function dateDistanceToNow(date: Date) {
  const formattedDate = formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR
  })

  return formattedDate
}