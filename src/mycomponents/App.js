import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Exercises from '../mypages/Exercises'
import ExerciseNew from '../mypages/ExerciseNew'
import NotFound from './NotFound'


export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercises" component={Exercises} />
                <Route exact path="/exercises/new" component={ExerciseNew} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}