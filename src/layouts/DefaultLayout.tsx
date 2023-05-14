import { ReactNode } from "react"
import { Container } from "./styles"
import { Navbar } from "@/components/Navbar"

interface LayoutProps {
  children: ReactNode
}

export const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Navbar />

      {children}
    </Container>
  )
}