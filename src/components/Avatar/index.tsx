import {
  AvatarContainer,
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from "./styles"

interface AvatarProps {
  avatarUrl: string
  name: string
}

export function Avatar({ avatarUrl, name }: AvatarProps) {
  const nameFallback = name.split(" ").map((n) => n[0]).join("").slice(0, 2)

  return (
    <AvatarContainer>
      <AvatarRoot>
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