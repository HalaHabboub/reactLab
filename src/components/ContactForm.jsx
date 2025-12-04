import React, { useState } from 'react'

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
    <div>
      <h2 >People Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" name="name" placeholder="Enter name" value={username} style={{ marginBottom: '10px' }}
          onChange={(e) => setUsername(e.target.value)} />

        <input type="email" name="email" placeholder="Enter email" value={email} style={{ marginBottom: '10px' }}
          onChange={(e) => setEmail(e.target.value)} />


        <button type="submit" style={{ marginBottom: '10px' }}>Add Person</button>
      </form>


    </div>
  )
}
