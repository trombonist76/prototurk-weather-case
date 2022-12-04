export const convertLocale = (string, locale = "tr-TR") => {
    const result = string.toLocaleLowerCase(locale)
    return result
  }