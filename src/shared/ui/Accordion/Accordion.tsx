import { memo, useRef, useState } from 'react'
import ArrowIcon from '@/shared/assets/img/arrow.svg'
import { classNames } from '@classNames'
import './Accordion.scss'

interface AccordionProps {
  className?: string
  title: string
  content: string
  tag?: 'div' | 'li'
}

export const Accordion = memo((props: AccordionProps) => {
  const { className, title, content, tag: Tag = 'div' } = props
  const [isOpen, setIsOpen] = useState(false)

  const contentRef = useRef<HTMLParagraphElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => {
    if (!contentRef.current || !wrapperRef.current) return

    if (!isOpen) {
      wrapperRef.current.style.height = contentRef.current.scrollHeight + 'px'
      wrapperRef.current.style.padding = '28px 32px'
    }

    if (isOpen) {
      wrapperRef.current.style.height = 0 + 'px'
      wrapperRef.current.style.padding = '0 32px'
    }

    setIsOpen((prev) => !prev)
  }

  return (
    <Tag className={classNames('accordion', {}, [className])}>
      <button className="accordion__button" onClick={handleToggle}>
        <p className="accordion__title">{title}</p>
        <ArrowIcon
          className={classNames('accordion__icon', {
            'accordion__icon--open': isOpen
          })}
        />
      </button>
      <div className="accordion__wrapper" ref={wrapperRef}>
        <p ref={contentRef}>{content}</p>
      </div>
    </Tag>
  )
})
