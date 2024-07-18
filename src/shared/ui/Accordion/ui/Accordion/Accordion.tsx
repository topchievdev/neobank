import { useEffect, useRef, useState } from 'react'
import ArrowIcon from '@/shared/assets/img/arrow.svg'
import { classNames } from '@classNames'
import './Accordion.scss'

interface IAccordionProps {
  className?: string
  title: string
  content: string
  name: string
  checked?: boolean
  tag?: 'div' | 'li'
  onlyOne?: boolean
  forceUpdate: () => void
}

export const Accordion = (props: IAccordionProps) => {
  const {
    className,
    title,
    name,
    content,
    checked,
    tag: Tag = 'div',
    forceUpdate,
    onlyOne
  } = props

  const [isChecked, setIsChecked] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)

  const inputRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (inputRef.current) setIsChecked(inputRef.current.checked)
    if (contentRef.current) setContentHeight(contentRef.current.scrollHeight)
  })

  const onClick = () => {
    if (!inputRef.current) return
    inputRef.current.checked = !isChecked
    setIsChecked((prev) => !prev)
    if (onlyOne) forceUpdate()
  }

  const iconMods = { 'accordion__icon--active': isChecked }
  const wrapperMods = { 'accordion__wrapper--active': isChecked }

  return (
    <Tag className={classNames('accordion', {}, [className])}>
      <input
        className="accordion__input"
        id={title}
        name={name}
        value={title}
        ref={inputRef}
        checked={checked}
        type={onlyOne ? 'radio' : 'checkbox'}
        onChange={() => {}}
      />
      <label className="accordion__label" htmlFor={title} onClick={onClick}>
        <p className="accordion__title">{title}</p>
        <ArrowIcon className={classNames('accordion__icon', iconMods)} />
      </label>
      <div
        className={classNames('accordion__wrapper', wrapperMods)}
        style={{ height: isChecked ? contentHeight : 0 }}
      >
        <p ref={contentRef}>{content}</p>
      </div>
    </Tag>
  )
}
