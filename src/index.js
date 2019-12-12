import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
// import App from './components/App'
import Card from './mycomponents/Card'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')

ReactDOM.render(<Card 
    title="Tu madre es calva"
    description="Enfermera me he vuelto a cagar encima"
    leftColor="#A74CF2"
    rigthColor="#617BFB"
    />, container)