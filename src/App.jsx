import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ContactForm from './components/ContactForm.jsx'
import ContactList from './components/ContactList.jsx'
import './App.css'

function App() {
  const [people, setPeople] = useState([])
  const addPerson = (newPerson) => {
    setPeople([...people, newPerson])
  }



  return (
    <>

      <ContactForm addPerson={addPerson} />
      <ContactList people={people} />
    </>
  )
}

export default App
