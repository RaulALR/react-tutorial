import React from 'react'
import Welcome from '../mycomponents/Welcome'
import exercises from '../mocks/exercises'
import ExercisesList from '../mycomponents/ExercisesList'
import  AddButton  from '../mycomponents/AddButton';

export default class Exercises extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: exercises
        }
    }
    render() {
        return (
            <div>
                <Welcome username="Puto" />
                <ExercisesList exercises={this.state.data}/>
                <AddButton />
            </div>
        )
    }
} 
