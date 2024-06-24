import { ReactNode, useEffect, useRef, useState } from 'react'
import './Slider.scss'
import { ISliderValues, initialValues } from '../model/initialValues'
import { extractValues } from '../lib/extractValues'
import { Button } from '../../Button/Button'
import Arrow from '@/shared/assets/img/arrow-slider.svg'

interface ISlide {
  content: ReactNode
  key: string | number
}

interface ISliderProps {
  slides: ISlide[]
}

export const Slider = (props: ISliderProps) => {
  const { slides } = props

  const [relativeSide, setRelativeSide] = useState<'left' | 'right'>('left')
  const [activeCard, setActiveCard] = useState<number>(0)
  const [values, setValues] = useState<ISliderValues>(initialValues)
  const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(false)
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLUListElement>(null)
  const cardRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (wrapperRef.current && lineRef.current && cardRef.current) {
      const newValues = extractValues({
        wrapper: wrapperRef.current,
        line: lineRef.current,
        card: cardRef.current
      })

      setValues({ ...newValues })
      initSlider()
    }
  }, [wrapperRef.current, lineRef.current, cardRef.current, slides])

  useEffect(() => {
    initSlider()
  }, [activeCard])

  const initSlider = () => {
    if (!lineRef.current) return
    const { stepWidth, cardsCountVisible, shift } = values

    if (relativeSide === 'left') {
      lineRef.current.style.transform = `translate(${-activeCard * stepWidth}px)`
    }
    if (relativeSide === 'right') {
      lineRef.current.style.transform = `translate(${
        (-activeCard + cardsCountVisible) * stepWidth + shift
      }px)`
    }
    controlAvailableButton()
  }

  const controlAvailableButton = () => {
    const { lastCardIndex, firstCardIndex } = values
    setIsPrevDisabled(activeCard === firstCardIndex ? true : false)
    setIsNextDisabled(activeCard === lastCardIndex ? true : false)
  }

  const prevClick = () => {
    const { firstCardIndex, cardsCountVisible } = values

    if (activeCard > firstCardIndex + cardsCountVisible || relativeSide === 'left') {
      setActiveCard((prev) => prev - 1)
    } else {
      setActiveCard(firstCardIndex)
      setRelativeSide('left')
    }
  }

  const nextClick = () => {
    const { lastCardIndex, cardsCountVisible } = values

    if (activeCard < lastCardIndex - cardsCountVisible || relativeSide === 'right') {
      setActiveCard((prev) => prev + 1)
    } else {
      setActiveCard(lastCardIndex)
      setRelativeSide('right')
    }
  }

  const renderSlides = slides.map(({ content, key }) => (
    <li className="slider__item" key={key} ref={cardRef}>
      <div className="slider__card">{content}</div>
    </li>
  ))

  return (
    <div className="slider">
      <div className="slider__wrapper" ref={wrapperRef}>
        <ul className="slider__line" ref={lineRef}>
          {renderSlides}
        </ul>
      </div>
      <div className="slider__buttons">
        <Button
          theme="circle"
          className="slider__button--prev"
          onClick={prevClick}
          disabled={isPrevDisabled}
        >
          <Arrow />
        </Button>
        <Button
          theme="circle"
          className="slider__button--next"
          onClick={nextClick}
          disabled={isNextDisabled}
        >
          <Arrow />
        </Button>
      </div>
    </div>
  )
}
