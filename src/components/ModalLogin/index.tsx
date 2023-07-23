import * as Dialog from '@radix-ui/react-dialog'
import { ActionWrapper, Content, Overlay } from './styles'
import { SocialLoginButton } from '../SocialLoginButton'

interface ModalLoginProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function ModalLogin({ open, setOpen }: ModalLoginProps) {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <strong>Faça login para deixar sua avaliação</strong>

          <ActionWrapper>
            <SocialLoginButton provider='google' />
            <SocialLoginButton provider='github' />
          </ActionWrapper>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}