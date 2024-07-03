interface IExtractValues {
  wrapper: HTMLDivElement
  line: HTMLUListElement
  card: HTMLLIElement
}

export const extractValues = (props: IExtractValues) => {
  const { wrapper, line, card } = props

  const gapValue = parseInt(window.getComputedStyle(line).gap)
  const wrapperWidth = wrapper.offsetWidth
  const cardWidth = card.offsetWidth
  const stepWidth = cardWidth + gapValue
  const cardsCount = document.querySelectorAll('.slider__card').length
  const cardsCountVisible = Math.floor(wrapperWidth / stepWidth)
  const lastCardIndex = cardsCount - 1
  const firstCardIndex = 0
  const shift = wrapperWidth - stepWidth * cardsCountVisible - cardWidth

  return {
    cardsCountVisible,
    firstCardIndex,
    lastCardIndex,
    wrapperWidth,
    cardsCount,
    cardWidth,
    stepWidth,
    gapValue,
    shift
  }
}
