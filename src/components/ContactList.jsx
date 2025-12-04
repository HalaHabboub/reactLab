import React, { useState } from 'react'
import ContactItem from './ContactItem'
import './css/ContactList.css'

export default function ContactList({ people, onDelete }) {
  return (
    <div className="contact-list-container">
      <h3>People List</h3>
      <ul className="contact-list">
        {people.map((person, index) => (
          <div key={index}>
            {index + 1}
            < ContactItem person={person} />
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        ))}
      </ul >
    </div>
  )
}