import React from 'react'
import Card from '../mycomponents/Card'
import Welcome from '../mycomponents/Welcome'
import exercises from '../mocks/exercises'

export default class Exercises extends React.Component {
    constructor(propt) {
        super(propt)
        this.state = {
            data: exercises
        }
    }
    render() {
        return (
            <div>
                <Welcome username="Puto" />
                {this.state.data.map((item) => {
                    return <Card
                        title={item.title}
                        description={item.description}
                        image={item.img}
                        leftColor={item.leftColor}
                        rigthColor={item.rightColor}
                    />
                })}
            </div>
        )
    }
} 
