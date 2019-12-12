import React from 'react'
import buttomImg from '../images/add.png'

export default class AddButton extends React.Component {
    render() {
        return (
            <img src={buttomImg} className="Fitness-Add" alt="exercise" />
        )
    }
}
