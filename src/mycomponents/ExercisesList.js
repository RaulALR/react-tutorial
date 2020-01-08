import React from 'react'
import Card from './Card'

const ExercisesList = (props) => {
    return (
        <div>
            {props.exercises.map((item) => {
                return <Card
                    key={item.key}
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

export default ExercisesList