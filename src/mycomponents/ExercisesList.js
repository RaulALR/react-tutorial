import React from 'react'
import Card from './Card'

export default function ExercisesList(props){
    return (
        <div>
        {props.exercises.map((item) => {
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