import { signOut, useSession } from 'next-auth/react'
import { LogOut, LogIn } from 'lucide-react'
import { Aside, LogoutButton, NavLink, Navigation } from './styles'
import { theme } from '@/styles/stitches.config'

export function Navbar() {
  const session = useSession()
  const isAuthenticated = session.status === 'authenticated'

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

      <LogoutButton onClick={handleLogin}>
        {isAuthenticated
          ? (
            <>
              Logout
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
      </LogoutButton>
    </Aside>
  )
}