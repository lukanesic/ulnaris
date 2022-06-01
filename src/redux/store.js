import { configureStore } from '@reduxjs/toolkit'
import patientSlice from './patientSlice'

export default configureStore({
  reducer: {
    patients: patientSlice,
  },
})
