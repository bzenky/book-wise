import { FormEvent, useState } from "react"
import { Search } from "lucide-react"
import { theme } from "@/styles/stitches.config"
import { Button, Input, SearchWrapper } from "./styles"

interface CustomElements extends HTMLFormControlsCollection {
  search: HTMLInputElement
}

export interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements
}

interface SearchInputProps {
  handleSearch: (event: FormEvent<CustomForm>) => void
  placeholder?: string
}

export function SearchInput({ handleSearch, placeholder }: SearchInputProps) {
  const [focused, setFocused] = useState(false)

  function handleFocusIconColor() {
    if (focused) return String(theme.colors.green200)

    return String(theme.colors.gray500)
  }

  return (
    <SearchWrapper onSubmit={(event: FormEvent<CustomForm>) => handleSearch(event)}>
      <Input
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        name="search"
      />

      <Button>
        <Search
          size={20}
          color={handleFocusIconColor()}
        />
      </Button>
    </SearchWrapper>
  )
}