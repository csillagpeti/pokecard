import "./ColorBox.css"
import { useState } from "react";

function pickRandomColor({colors}){
  return colors[Math.floor(Math.random() * colors.length)]
}

export default function ColorBox({colors}){
  const [color, setColor] = useState(pickRandomColor({colors}));
  function updateColor(){
    setColor(pickRandomColor({colors}))
  }
  return(
    <canvas onClick={updateColor} className="ColorBox" width="100" height="100" style={{ backgroundColor: color }}></canvas>
  )
}