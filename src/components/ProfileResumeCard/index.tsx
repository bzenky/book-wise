import { BookOpen, Bookmark, UserCheck } from "lucide-react"
import { theme } from "@/styles/stitches.config"
import { Avatar } from "../Avatar"
import { Container, Divider, InfoDataWrapper, InfoWrapper, ProfileDataWrapper, UserNameInfoWrapper, UserPersonalInfoWrapper } from "./styles"

export function ProfileResumeCard() {
  return (
    <Container>
      <UserPersonalInfoWrapper>
        <Avatar
          avatarUrl="https://www.github.com/bzenky.png"
          name="Bruno Zenky"
          size="base"
        />

        <UserNameInfoWrapper>
          <h3>Zenky</h3>
          <span>membro desde 2019</span>
        </UserNameInfoWrapper>
      </UserPersonalInfoWrapper>

      <Divider />

      <ProfileDataWrapper>
        <InfoWrapper>
          <BookOpen size={32} color={String(theme.colors.green100)} />

          <InfoDataWrapper>
            <h6>853</h6>
            <span>Páginas lidas</span>
          </InfoDataWrapper>
        </InfoWrapper>

        <InfoWrapper>
          <Bookmark size={32} color={String(theme.colors.green100)} />

          <InfoDataWrapper>
            <h6>3</h6>
            <span>Livros Avaliados</span>
          </InfoDataWrapper>
        </InfoWrapper>

        <InfoWrapper>
          <UserCheck size={32} color={String(theme.colors.green100)} />

          <InfoDataWrapper>
            <h6>3</h6>
            <span>Autores mais lidos</span>
          </InfoDataWrapper>
        </InfoWrapper>

        <InfoWrapper>
          <Bookmark size={32} color={String(theme.colors.green100)} />

          <InfoDataWrapper>
            <h6>Horror</h6>
            <span>Categoria mais lida</span>
          </InfoDataWrapper>
        </InfoWrapper>
      </ProfileDataWrapper>
    </Container>
  )
}