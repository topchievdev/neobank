import { configureStore } from '@reduxjs/toolkit'
import { IStateSchema } from './StateSchema'
import { prescoringReducer } from '@/features/PrescoringForm'
import {
  codeReducer,
  denyReducer,
  documentsReducer,
  loanStatusReducer,
  offerReducer
} from '@/entities/Loan'
import { scoringReducer } from '@/features/ScoringForm'
import { scheduleReducer } from '@/features/ScheduleTable'

export const createReduxStore = (initialState?: IStateSchema) => {
  return configureStore<IStateSchema>({
    reducer: {
      loanStatus: loanStatusReducer,
      prescoring: prescoringReducer,
      offer: offerReducer,
      scoring: scoringReducer,
      schedule: scheduleReducer,
      deny: denyReducer,
      documents: documentsReducer,
      code: codeReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
