import { useSession } from 'next-auth/react'
import { ReactNode, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { BookCard, BookInfo, BookTitleWrapper, Close, Content, Footer, FooterItem, Overlay, RatingTitleWrapper, RatingWrapper } from './styles'
import { BookProps } from '../RatingCardMinimal'
import { renderRating } from '@/utils/renderRating'
import { BookOpen, Bookmark, X } from 'lucide-react'
import { theme } from '@/styles/stitches.config'
import { ModalLogin } from '../ModalLogin'

interface Modal {
  children: ReactNode
  data: BookProps
}

export function ModalBook({ children, data }: Modal) {
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const session = useSession()

  function handleRateBook() {
    const isAuthenticated = session.status === 'authenticated'

    if (!isAuthenticated) {
      setOpenLoginModal(true)
    } else {
      console.log('authed')
    }
  }

  const ratingCountText = data.countRating
    ? (
      data.countRating === 0
        ? 'Nenhuma avaliação cadastrada.'
        : data.countRating > 1
          ? 'avaliações'
          : 'avaliação'
    )
    : 'Nenhuma avaliação cadastrada.'

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <BookCard>

            <header>
              <img src={data.cover} alt="Capa livro" width={172} height={242} />
              <BookInfo>
                <BookTitleWrapper>
                  <h2>{data.name}</h2>
                  <span>{data.author}</span>
                </BookTitleWrapper>
                <RatingWrapper>
                  <div>{renderRating(data.averageRating)}</div>
                  <span>{data.countRating} {ratingCountText}</span>
                </RatingWrapper>
              </BookInfo>
            </header>

            <Footer>
              <FooterItem>
                <Bookmark size={24} color={theme.colors.green100 as unknown as string} />

                <div>
                  <h6>Categoria</h6>
                  <span>{data?.categories}</span>
                </div>
              </FooterItem>

              <FooterItem>
                <BookOpen size={24} color={theme.colors.green100 as unknown as string} />

                <div>
                  <h6>Páginas</h6>
                  <span>{data?.totalPages}</span>
                </div>
              </FooterItem>
            </Footer>
          </BookCard>

          <RatingTitleWrapper>
            <h3>Avaliações</h3>

            <button onClick={() => handleRateBook()}>
              Avaliar
            </button>
          </RatingTitleWrapper>

          <Close>
            <X size={24} color={theme.colors.gray400 as unknown as string} />
          </Close>
        </Content>
      </Dialog.Portal>

      <ModalLogin
        open={openLoginModal}
        setOpen={(value: boolean) => setOpenLoginModal(value)}
      />
    </Dialog.Root>
  )
}