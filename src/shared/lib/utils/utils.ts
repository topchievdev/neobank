export const minutesToMs = (min: number) => {
  const ms = 1000
  const sec = 60
  return ms * sec * min
}

export const isHTML = (str: string) => {
  const doc = new DOMParser().parseFromString(str, 'text/html')
  return Array.from(doc.body.childNodes).some(
    (node) => node.nodeType === Node.ELEMENT_NODE
  )
}

export const checkImageSrc = (url: string) => {
  const LOADING_TIME = 2000

  return new Promise((resolve) => {
    const img = new Image()

    const timeout = setTimeout(() => {
      resolve(false)
    }, LOADING_TIME)

    img.onload = () => {
      clearTimeout(timeout)
      resolve(true)
    }
    img.onerror = () => {
      clearTimeout(timeout)
      resolve(false)
    }
    img.src = url
  })
}
