import React, { useState } from 'react'
import './css/ContactForm.css'

export default function ContactForm({ addPerson }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      username,
      email
    };

    console.log(newPerson);
    addPerson(newPerson);

    setUsername('');
    setEmail('');
  }

  return (
    <div className="contact-form-container">
      <h2>People Form</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Add Person</button>
      </form>
    </div>
  )
}