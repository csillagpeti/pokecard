export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 6) + 1;
  const num2 = Math.floor(Math.random() * 6) + 1;
  const isWinner = num1 === num2;
  const styles = { color: isWinner ? "green" : "red" }
  return (<div className="DoubleDice" style={styles}>
    <h1>Double Dice</h1>
    <h2>Die 1: {num1}</h2>
    <h2>Die 2: {num2}</h2>
    {isWinner && <h2>You win!</h2>}
  </div>
  )
}