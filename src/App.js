import { useEffect } from 'react'

import Hero from './components/Hero'
import Patients from './components/Patients'
import PatientSection from './components/PatientSection'
import Login from './pages/Login'

import { Routes, Route } from 'react-router'
import { useNavigate } from 'react-router'

const App = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Login />} />
      <Route path='/admin' exact element={<Admin />} />
    </Routes>
  )
}

const Admin = () => {
  const admin = localStorage.getItem('admin')

  const navigate = useNavigate()

  useEffect(() => {
    if (!admin) {
      navigate('/')
    }
  }, [admin, navigate])

  return (
    <div className='app-container'>
      <Hero />
      <Patients />
      <PatientSection />
    </div>
  )
}

export default App
