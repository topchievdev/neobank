export interface ISliderValues {
  cardsCountVisible: number
  firstCardIndex: number
  lastCardIndex: number
  wrapperWidth: number
  cardsCount: number
  cardWidth: number
  stepWidth: number
  gapValue: number
  shift: number
}

export const initialValues: ISliderValues = {
  cardsCountVisible: 0,
  firstCardIndex: 0,
  lastCardIndex: 0,
  wrapperWidth: 0,
  cardsCount: 0,
  cardWidth: 0,
  stepWidth: 0,
  gapValue: 0,
  shift: 0
}
