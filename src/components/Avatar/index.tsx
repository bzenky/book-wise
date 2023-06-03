import {
  AvatarContainer,
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from "./styles"

interface AvatarProps {
  avatarUrl: string
  name: string
  size?: 'sm' | 'base'
}

export function Avatar({ avatarUrl, name, size }: AvatarProps) {
  const nameFallback = name.split(" ").map((n) => n[0]).join("").slice(0, 2)

  return (
    <AvatarContainer>
      <AvatarRoot size={size}>
        <AvatarImage
          src={avatarUrl}
          alt={name}
        />

        <AvatarFallback>
          {nameFallback}
        </AvatarFallback>
      </AvatarRoot>
    </AvatarContainer>
  )
}