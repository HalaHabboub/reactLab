import React from 'react'

export default function ContactItem({ person }) {
    return (
        <div>
            <li>{person.username} - {person.email}</li>
        </div>
    )
}
