import { BookOpen, Bookmark, UserCheck } from "lucide-react"
import { theme } from "@/styles/stitches.config"
import { Avatar } from "../Avatar"
import { Container, Divider, InfoDataWrapper, InfoWrapper, ProfileDataWrapper, UserNameInfoWrapper, UserPersonalInfoWrapper } from "./styles"

interface ProfileProps {
  profileData: {
    avatar_url: string | undefined
    name: string | undefined
    memberSince: string | undefined
    pagesRead: number | undefined
    booksRated: number | undefined
    authorsRead: number | undefined
    categoryMostRead: string | undefined
  }
}

export function ProfileResumeCard({ profileData }: ProfileProps) {
  const memberSinceYear = new Date(profileData.memberSince ?? new Date()).getFullYear()

  return (
    <Container>
      <UserPersonalInfoWrapper>
        <Avatar
          avatarUrl={profileData.avatar_url ?? ''}
          name={profileData.name ?? ''}
          size="base"
        />

        <UserNameInfoWrapper>
          <h3>{profileData.name}</h3>
          <span>membro desde {memberSinceYear}</span>
        </UserNameInfoWrapper>
      </UserPersonalInfoWrapper>

      <Divider />

      <ProfileDataWrapper>
        <InfoWrapper>
          <BookOpen size={32} color={String(theme.colors.green100)} />

          <InfoDataWrapper>
            <h6>{profileData.pagesRead}</h6>
            <span>Páginas lidas</span>
          </InfoDataWrapper>
        </InfoWrapper>

        <InfoWrapper>
          <Bookmark size={32} color={String(theme.colors.green100)} />

          <InfoDataWrapper>
            <h6>{profileData.booksRated}</h6>
            <span>Livros Avaliados</span>
          </InfoDataWrapper>
        </InfoWrapper>

        <InfoWrapper>
          <UserCheck size={32} color={String(theme.colors.green100)} />

          <InfoDataWrapper>
            <h6>{profileData.authorsRead}</h6>
            <span>Autores lidos</span>
          </InfoDataWrapper>
        </InfoWrapper>

        <InfoWrapper>
          <Bookmark size={32} color={String(theme.colors.green100)} />

          <InfoDataWrapper>
            <h6>{profileData.categoryMostRead}</h6>
            <span>Categoria mais lida</span>
          </InfoDataWrapper>
        </InfoWrapper>
      </ProfileDataWrapper>
    </Container>
  )
}