import React from 'react'
import './styles/Welcome.css'

export default function Welcome({ username }) {
    return (
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {username}!</h1>
                <p>Let´s workout to get someone gains!</p>
            </div>
        </div>
    )
}