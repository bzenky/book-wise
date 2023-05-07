import { usePathname } from "next/navigation"
import { CustomLink } from "./styles"

interface NavLinkProps {
  children: React.ReactNode
  href: string
}

export function NavLink({ children, href }: NavLinkProps) {
  const activePath = usePathname()

  return (
    <CustomLink
      data-active={activePath === href}
      href={href}
    >
      {children}
    </CustomLink>
  )
}