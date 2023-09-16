export function formatAndCapitalize (inputString: string): string {
  // Reemplazamos el %20 con espacios en blanco
  const stringWithSpaces = inputString.replace(/%20/g, ' ')

  // Divididimos la cadena en palabras utilizando un espacio como separador
  const words = stringWithSpaces.split(' ')

  // Iteramos sobre cada palabra
  const capitalizedWords = words.map((word) => {
    // Asegura que la palabra no esta vacia
    if (word.length === 0) {
      return word
    }

    // Cambia la primera letra y agrega el resto de la palabra queda en minúsculas
    const firstLetter = word.charAt(0).toUpperCase()
    const restOfWord = word.slice(1).toLowerCase()

    return firstLetter + restOfWord
  })

  // Une las palabras capitalizadas en una sola cadena
  const capitalizedString = capitalizedWords.join(' ')

  return capitalizedString
}
