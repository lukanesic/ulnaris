import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { db } from '../firebase'
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from '@firebase/firestore'

export const fetchPatients = createAsyncThunk(
  'patientSlice/fetchPatients',
  async () => {
    try {
      const patientsRef = collection(db, 'patients')
      const data = await getDocs(patientsRef)
      return data.docs.map((patient) => ({ ...patient.data(), id: patient.id }))
    } catch (error) {
      console.log(error)
    }
  }
)

const initialState = {
  patients: [],
  patient: {},
  loading: false,
  error: false,
}

export const patientSlice = createSlice({
  name: 'patientSlice',
  initialState,
  reducers: {
    selecedPatient: (state, { payload }) => {
      state.patient = payload
    },
  },
  extraReducers: {
    [fetchPatients.pending]: (state) => {
      state.loading = true
    },
    [fetchPatients.fulfilled]: (state, { payload }) => {
      state.patients = payload
      state.loading = false
    },
    [fetchPatients.rejected]: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const { selecedPatient } = patientSlice.actions
export default patientSlice.reducer
