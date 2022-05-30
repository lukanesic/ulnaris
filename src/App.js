import Hero from './components/Hero'
import Patients from './components/Patients'
import PatientSection from './components/PatientSection'

const App = () => {
  return (
    <div className='app-container'>
      <Hero />
      <Patients />
      <PatientSection />
    </div>
  )
}

export default App
