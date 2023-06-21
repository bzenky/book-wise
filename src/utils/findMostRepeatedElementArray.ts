export function findMostRepeatedElementArray<T>(array: T[]): T | undefined {
  if (array.length === 0) {
    return undefined
  }

  const count = new Map<T, number>()

  array.forEach(element => {
    count.set(element, (count.get(element) || 0) + 1)
  })

  // Find the most repeated element
  let mostRepeatedElement: T | undefined
  let maxOccurrences = 0

  for (const [element, occurrences] of count.entries()) {
    if (occurrences > maxOccurrences) {
      mostRepeatedElement = element
      maxOccurrences = occurrences
    }
  }

  return mostRepeatedElement
}