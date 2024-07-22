export interface IScheduleSchema {
  data?: IScheduleData[]
  error?: string
  isLoading: boolean
}

export interface IScheduleData {
  number: number
  date: string
  totalPayment: number
  interestPayment: number
  debtPayment: number
  remainingDebt: number
}
