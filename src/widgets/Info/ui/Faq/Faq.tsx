import { Accordion } from '@/shared/ui'
import './Faq.scss'

const faqData: { title: string; content: string }[] = [
  {
    title: 'How to get a card?',
    content:
      'We will deliver your card by courier free of charge. Delivery in Moscow and St. Petersburg - 1-2 working days. For other regions of the Russian Federation - 2-5 working days.'
  },
  {
    title: 'What documents are needed and how old should one be to get a card?',
    content: 'Need a passport. You must be between 20 and 70 years old.'
  },
  {
    title: 'In what currency can I issue a card?',
    content: 'In rubles, dollars or euro'
  },
  {
    title: 'How much income do I need to get a credit card?',
    content:
      'To obtain a credit card, you will need an income of at least 25,000 rubles per month after taxes.'
  },
  {
    title: 'How do I find out about the bank\'s decision on my application?', // prettier-ignore
    content:
      'After registration, you will receive an e-mail with a decision on your application.'
  }
]

export const Faq = () => {
  return (
    <ul className="faq">
      {faqData.map(({ title, content }) => (
        <Accordion
          className="faq__item"
          title={title}
          content={content}
          key={title}
          tag="li"
        />
      ))}
    </ul>
  )
}
