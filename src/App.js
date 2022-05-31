import Backdrop from './components/Backdrop'
import Hero from './components/Hero'
import AddPatient from './components/Hero/AddPatient'
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
