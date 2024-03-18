function handleCLick(message) {
  console.log("clicked the button")
  console.log(message)
}

function handleHover() {
  console.log("hovered")
}

function Clicker({message, buttonText}) {
  return (
    <div>
      <p>Click the button!</p>
      <button onClick={()=>alert(message)}>{buttonText}</button>
    </div>
  )
}

export default Clicker;