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
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Form from './Form'

const data = [
  { id: 1, item: 'eggs', quantity: 12, completed: false },
  { id: 2, item: 'milk', quantity: 4, completed: true },
  { id: 3, item: 'butter', quantity: 1, completed: false },
  { id: 4, item: 'carrots', quantity: 6, completed: true },
  { id: 5, item: 'chicken breasts', quantity: 2, completed: false }
]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

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
      <Slots val1="🍒" val2="🍐" val3 = "🍌"/>
      <ShoppingList items={data}/>
      <PropertyList props={properties}/>
      <Clicker />
      <Form /> */}
      <Clicker message="HI!!!" buttonText="Click me" />
      <Clicker message="Please Stop Clicking Me!" buttonText="Do Not Click" />
    </>
  )
}

export default App
