import { Info, Instruction, Prescoring, Suggestion } from '@/widgets'
import '@/app/styles/index.scss'
import './LoanPage.scss'

const LoanPage = () => {
  return (
    <main className="loan page">
      <Suggestion />
      <Info />
      <Instruction />
      <Prescoring />
    </main>
  )
}

export default LoanPage
