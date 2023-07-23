import * as Dialog from '@radix-ui/react-dialog'
import { ActionWrapper, Close, Content, Overlay } from './styles'
import { SocialLoginButton } from '../SocialLoginButton'
import { theme } from '@/styles/stitches.config'
import { X } from 'lucide-react'

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

          <Close>
            <X size={24} color={theme.colors.gray400 as unknown as string} />
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}