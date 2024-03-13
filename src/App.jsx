import { useState } from 'react'
import './App.css'
import Greeter from "./Greeter"
import LoginForm from "./LoginForm"
import Die from './Die'
import DiceRoll from './DiceRoll'
import RandomPokemon from './RandomPokemon'
import DoubleDice from './DoubleDice'

function App() {
  return (
    <>
      <Greeter person="Bob"/>
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
    </>
  )
}

export default App
