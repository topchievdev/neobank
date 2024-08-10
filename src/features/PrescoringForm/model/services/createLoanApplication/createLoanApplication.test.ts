// import { IPrescoringData } from '@/shared/types/loan'

// const prescoringData: IPrescoringData = {
//   firstName: 'John',
//   lastName: 'Doe',
//   middleName: '',
//   amount: 200000,
//   birthdate: '1992-12-12',
//   email: 'test@test.com',
//   passportNumber: '123123',
//   passportSeries: '1231',
//   term: 6
// }

// const offerData = [
//   {
//     applicationId: 1,
//     requestedAmount: 150000,
//     totalAmount: 150000,
//     monthlyPayment: 26702.75,
//     term: 6,
//     rate: 23,
//     isInsuranceEnabled: false,
//     isSalaryClient: false
//   },
//   {
//     applicationId: 1,
//     requestedAmount: 150000,
//     totalAmount: 150000,
//     monthlyPayment: 26626.65,
//     term: 6,
//     rate: 22,
//     isInsuranceEnabled: false,
//     isSalaryClient: true
//   },
//   {
//     applicationId: 1,
//     requestedAmount: 150000,
//     totalAmount: 160000,
//     monthlyPayment: 28162.58,
//     term: 6,
//     rate: 19,
//     isInsuranceEnabled: true,
//     isSalaryClient: false
//   },
//   {
//     applicationId: 1,
//     requestedAmount: 150000,
//     totalAmount: 160000,
//     monthlyPayment: 28082.19,
//     term: 6,
//     rate: 18,
//     isInsuranceEnabled: true,
//     isSalaryClient: true
//   }
// ]

// describe('createLoanApplication', () => {
//   test('create loan success', async () => {
//     const thunk = new TestAsyncThunk(createLoanApplication)
//     thunk.api.post.mockReturnValue(Promise.resolve({ data: { offerData } }))
//     const result = await thunk.callThunk(prescoringData)
//     expect(thunk.dispatch).toHaveBeenCalled()
//     expect(thunk.dispatch).toHaveBeenCalledTimes(2)
//     expect(result.meta.requestStatus).toBe('fulfilled')
//   })
// })
