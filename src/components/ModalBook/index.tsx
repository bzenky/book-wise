import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { ReactNode, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { BookOpen, Bookmark, X } from 'lucide-react'
import { renderRating } from '@/utils/renderRating'
import { theme } from '@/styles/stitches.config'
import { ModalLogin } from '../ModalLogin'
import { BookCard, BookInfo, BookRatingCard, BookRatingHeader, BookRatingTitleWrapper, BookTitleWrapper, Close, Content, Footer, FooterItem, Overlay, RatingStarWrapper, RatingTitleWrapper, RatingWrapper } from './styles'
import { Avatar } from '../Avatar'
import { dateDistanceToNow } from '@/utils/dateDistanceToNow'
import { ReviewCard } from '../ReviewCard'
import { BookProps } from '../RatingCardMinimal'

interface Modal {
  children: ReactNode
  data: BookProps
  refetch?: () => Promise<BookProps[]>
}

export function ModalBook({ children, data, refetch }: Modal) {
  const [showReviewFields, setShowReviewFields] = useState(false)
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const session = useSession()
  const ratingSorted = data.ratings?.sort((a, b) => b.created_at.localeCompare(a.created_at))

  function handleRateBook() {
    const isAuthenticated = session.status === 'authenticated'

    if (!isAuthenticated) {
      setOpenLoginModal(true)
    } else {
      setShowReviewFields(!showReviewFields)
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

          {showReviewFields && !!refetch && (
            <ReviewCard
              bookId={data.id}
              showComponent={setShowReviewFields}
              refetch={refetch}
            />
          )}

          <RatingWrapper>
            {ratingSorted?.map(rating => {
              return (
                <BookRatingCard key={rating.id} ownReview={rating.user_id === session.data?.user.id}>
                  <BookRatingHeader>
                    <Link href={`/profile/${rating.user_id}`}>
                      <Avatar
                        name={rating.user.name}
                        avatarUrl={rating.user.avatar_url}
                        size='sm'
                      />
                      <BookRatingTitleWrapper>
                        <strong>{rating.user.name}</strong>
                        <span>{dateDistanceToNow(new Date(rating.created_at))}</span>
                      </BookRatingTitleWrapper>
                    </Link>

                    <RatingStarWrapper>
                      {renderRating(rating.rate)}
                    </RatingStarWrapper>
                  </BookRatingHeader>

                  <p>{rating.description}</p>
                </BookRatingCard>
              )
            })}
          </RatingWrapper>

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