import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import { Compass, LineChart, LogOut, LogIn, User } from 'lucide-react'
import { Avatar } from '../Avatar'
import { Aside, AuthButton, Navigation } from './styles'
import { NavLink } from '../NavLink'
import { theme } from '@/styles/stitches.config'

export function Navbar() {
  const session = useSession()
  const router = useRouter()
  const isAuthenticated = session.status === 'authenticated'
  const userFirstName = session.data?.user.name.split(" ")[0]
  const userId = session.data?.user.id

  function handleLogin() {
    if (isAuthenticated) {
      signOut({ callbackUrl: '/' })
      return
    }

    router.push('/')
  }

  return (
    <Aside>
      <img src="/logo.svg" alt="Logo" />

      <Navigation>
        <NavLink href='/dashboard'>
          <LineChart size={20} color={String(theme.colors.green100)} />
          Início
        </NavLink>
        <NavLink href='/explore'>
          <Compass size={20} color={String(theme.colors.green100)} />
          Explorar
        </NavLink>
        {isAuthenticated && (
          <NavLink href={`/profile/${userId}`}>
            <User size={20} color={String(theme.colors.green100)} />
            Perfil
          </NavLink>
        )}
      </Navigation>

      <AuthButton onClick={handleLogin}>
        {isAuthenticated
          ? (
            <>
              <Avatar
                avatarUrl={session.data.user.avatar_url}
                name={session.data.user.name}
                size='sm'
              />
              {userFirstName}
              <LogOut size={20} color={String(theme.colors.green100)} />
            </>
          )
          : (
            <>
              Fazer Login
              <LogIn size={20} color={String(theme.colors.green100)} />
            </>
          )
        }
      </AuthButton>
    </Aside>
  )
}