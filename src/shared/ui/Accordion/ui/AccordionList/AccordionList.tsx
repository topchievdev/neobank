import { useState } from 'react'
import { Accordion } from '../Accordion/Accordion'
import './AccordionList.scss'

interface IAccordionData {
  title: string
  content: string
}

interface IAccordionListProps {
  className?: string
  title?: string
  name: string
  data: IAccordionData[]
  onlyOne?: boolean
  parentForceUpdate?: () => void
}

export const AccordionList = (props: IAccordionListProps) => {
  const { className, title, name, data, onlyOne, parentForceUpdate } = props
  const [_, setState] = useState(false)

  const forceUpdate = () => setState((prev) => !prev)

  return (
    <>
      {title && <h3 className="accordion-list__title">{title}</h3>}
      <ul className={className}>
        {data.map(({ title, content }) => (
          <Accordion
            title={title}
            content={content}
            onlyOne={onlyOne}
            name={name}
            key={title}
            tag="li"
            forceUpdate={parentForceUpdate ? parentForceUpdate : forceUpdate}
          />
        ))}
      </ul>
    </>
  )
}
