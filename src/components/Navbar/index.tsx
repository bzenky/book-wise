import { signOut, useSession } from 'next-auth/react'
import { LogOut, LogIn } from 'lucide-react'
import { Avatar } from '../Avatar'
import { theme } from '@/styles/stitches.config'
import { Aside, AuthButton, NavLink, Navigation } from './styles'

export function Navbar() {
  const session = useSession()
  const isAuthenticated = session.status === 'authenticated'
  const userFirstName = session.data?.user.name.split(" ")[0]

  function handleLogin() {
    if (isAuthenticated) {
      signOut({ callbackUrl: '/' })
      return
    }
  }

  return (
    <Aside>
      <img src="/logo.svg" alt="Logo" />

      <Navigation>
        <NavLink href=''>
          Início
        </NavLink>
        <NavLink href=''>
          Explorar
        </NavLink>
        {isAuthenticated && (
          <NavLink href=''>
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