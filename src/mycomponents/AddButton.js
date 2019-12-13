import React from 'react'
import buttomImg from '../images/add.png'
import { Link } from 'react-router-dom'

export default class AddButton extends React.Component {
    render() {
        return (
            <Link to="/exercise/new">
                <img src={buttomImg} className="Fitness-Add" alt="exercise" />
            </Link>
        )
    }
}
