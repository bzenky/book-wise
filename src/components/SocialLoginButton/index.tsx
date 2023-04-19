
import { useRouter } from "next/router"
import { signIn } from "next-auth/react"
import { Button, Icon } from "./styles"

interface ButtonProps {
  provider?: 'github' | 'google'
}

export function SocialLoginButton({ provider }: ButtonProps) {
  const router = useRouter()

  function handleAuth() {
    if (!provider) {
      router.push('/dashboard')
    } else {
      signIn(provider, { callbackUrl: '/dashboard' })
    }
  }

  function buttonContent() {
    switch (provider) {
      case 'github':
        return (
          <>
            <Icon src="/icons/github-icon.svg" alt="Github" />
            Faça seu login com Github
          </>
        )
      case 'google':
        return (
          <>
            <Icon src="/icons/google-icon.svg" alt="Google" />
            Faça seu login com Google
          </>
        )
      default:
        return (
          <>
            <Icon src="/icons/rocket-launch.svg" alt="Visitante" />
            Acesse como visitante
          </>
        )
    }
  }

  return (
    <Button
      type='button'
      onClick={handleAuth}
    >
      {buttonContent()}
    </Button>
  )
}