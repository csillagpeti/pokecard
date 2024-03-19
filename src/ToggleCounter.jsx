import { useState } from "react";
import "./Toggler.css"

export default function ToggleCounter(){
  const toggleMood = () => {
    setMood(mood == 'happy' ? 'sad' : 'happy')
    setCount(count+1)
  } 
  const [mood, setMood] = useState('happy');
  const [count, setCount] = useState(0);
  return(
    <div>
      <p onClick={toggleMood} className="Toggler">{mood == 'happy' ? '😊' : '😔'}</p>
      <p>You toggled {count} times.</p>
    </div>
  )
}