import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <p>The Count is: {count}</p>
      <button onClick={() => setCount(count+1)}>Click</button>
    </div>
  )
}