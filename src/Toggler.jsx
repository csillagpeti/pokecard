import { useState } from "react";
import "./Toggler.css"

export default function Toggler(){
  const toggleMood = () => {
    setMood(mood == 'happy' ? 'sad' : 'happy')
  } 
  const [mood, setMood] = useState('happy');
  return(
    <div className="Toggler" onClick={toggleMood}>
      {mood == 'happy' ? '😊' : '😔'}
    </div>
  )
}