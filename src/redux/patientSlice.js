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

export const fetchPatient = createAsyncThunk(
  'patientSlice/fetchPatient',
  async (id) => {
    try {
      const patientRef = doc(db, 'patients', id)
      const patientSnap = await getDoc(patientRef)

      return patientSnap.id
    } catch (error) {
      console.log(error)
    }
  }
)

const initialState = {
  patients: [],
  patient: {},
  newExamination: {},
  loading: false,
  error: false,
  testPatient: {},
}

export const patientSlice = createSlice({
  name: 'patientSlice',
  initialState,
  reducers: {
    selecedPatient: (state, { payload }) => {
      state.patient = payload
    },
    setNewExamination: (state, { payload }) => {
      state.newExamination = payload
      state.patient.examinations.push(payload)
    },
    addNewPatientRequest: (state) => {
      state.loading = true
    },
    addNewPatientSuccess: (state, { payload }) => {
      state.patients.push(payload)
      state.loading = false
    },
    addNewPatientFail: (state) => {
      state.loading = false
      state.error = true
    },
    deletePatientRequest: (state) => {
      state.loading = true
    },
    deletePatientSuccess: (state, { payload }) => {
      state.loading = false
      state.patient = {}
      state.patients = state.patients.filter(
        (patient) => patient.id !== payload
      )
    },
    deletePatientFail: (state) => {
      state.loading = false
      state.error = true
    },
    deleteExamRequest: (state) => {
      state.loading = true
    },
    deleteExamSuccess: (state, { payload }) => {
      state.loading = false

      // Prvo brisem taj exam iz patient objekta koji je selektovan iz patients niza
      state.patient.examinations = state.patient.examinations.filter(
        (exam, index) => index !== payload.examIndex
      )

      const newArr = [...state.patients]

      const patientToUpdate = newArr.find(
        (patient) => payload.patientId === patient.id
      )

      const newPatientExaminations = patientToUpdate.examinations.filter(
        (exam, index) => payload.examIndex !== index
      )

      patientToUpdate.examinations = newPatientExaminations

      state.patients = newArr

      // zatim trebam da samo izbrisem isti taj iz patients iz niza. Ne trebam da vracam, vec da izbrsiem iz oba istovremeno.. E Luka
    },
    deleteExamFail: (state, { payload }) => {
      state.error = true
      state.loading = false
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
    [fetchPatient.pending]: (state) => {
      state.loading = true
    },
    [fetchPatient.fulfilled]: (state, { payload }) => {
      state.loading = false

      console.log(payload)
    },
    [fetchPatient.rejected]: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const {
  selecedPatient,
  setNewExamination,
  addNewPatientFail,
  addNewPatientRequest,
  addNewPatientSuccess,
  deletePatientFail,
  deletePatientRequest,
  deletePatientSuccess,
  deleteExamFail,
  deleteExamRequest,
  deleteExamSuccess,
} = patientSlice.actions
export default patientSlice.reducer
