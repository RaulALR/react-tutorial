import React from 'react';
import exerciseImg from '../images/exercise.png';
import circlesImg from '../images/circles.png'
import './styles/Card.css'

export default class Card extends React.Component {
    render(){
        const { title, description, leftColor, rigthColor } = this.props
        return (
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, {leftColor}, {rigthColor})`
            }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={exerciseImg} className="float-right"  alt="description of image"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
