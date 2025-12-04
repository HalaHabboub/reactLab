import React from 'react'
import './css/ContactItem.css'

export default function ContactItem({ person }) {
    return (
        <li className="contact-item">
            {person.username} - {person.email}
        </li>
    )
}