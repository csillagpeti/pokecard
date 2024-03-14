import { useState } from 'react'
import './App.css'
import Greeter from "./Greeter"
import LoginForm from "./LoginForm"
import Die from './Die'
import DiceRoll from './DiceRoll'
import RandomPokemon from './RandomPokemon'

function App() {
  return (
    <>
      <div className="card">
      <Greeter name="Lajos"/>
      </div>
    </>
  )
}

export default App
