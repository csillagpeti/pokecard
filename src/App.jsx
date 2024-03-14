import { useState } from 'react'
import './App.css'
import Greeter from "./Greeter"
import LoginForm from "./LoginForm"
import Die from './Die'
import DiceRoll from './DiceRoll'
import RandomPokemon from './RandomPokemon'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'
import Slots from './Slots'
import ShoppingList from './ShoppingList'

const data = [
  {id: 1, item: 'eggs', quantity: 12, completed: false},
  {id: 2, item: 'milk', quantity: 4, completed: true},
  {id: 3, item: 'butter', quantity: 1, completed: false},
  {id: 4, item: 'carrots', quantity: 6, completed: true},
  {id: 5, item: 'chicken breasts', quantity: 2, completed: false}
]

function App() {
  return (
    <>
      {/* <Greeter person="Bob"/>
      <LoginForm />
      <Die />
      <DiceRoll />
      <RandomPokemon />
      <Heading color="Teal"/>
      <Heading text="Hello" color="yellow" fontSize="40px"/>
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <ColorList colors={["red", "blue", "teal", "orange"]} />
      <Slots val1="🍒" val2="🍒" val3 = "🍒"/>
      <Slots val1="🍒" val2="🍐" val3 = "🍌"/> */}
      <ShoppingList items={data}/>
    </>
  )
}

export default App
