export default function DoubleDice(){
  const num1 = Math.floor(Math.random()*6)+1;
  const num2 = Math.floor(Math.random()*6)+1;
  return(<>
    <h2>Die 1: {num1}</h2>
    <h2>Die 2: {num2}</h2>
    {num1 === num2 && <h2>You win!</h2>}
    </>
  )
}