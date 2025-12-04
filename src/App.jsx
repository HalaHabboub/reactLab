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
  const deletePerson = (index) => {
    setPeople(people.filter((_, i) => i !== index));
  }

  return (
    <>
      <div className="app-container">

        <h1 className="app-title">Contact Manager</h1>
        <div className="content-wrapper">

          <ContactForm addPerson={addPerson} />

          <ContactList people={people} onDelete={deletePerson} />
        </div>
      </div>
    </>
  )
}

export default App
