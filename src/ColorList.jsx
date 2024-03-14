export default function ColorList({ colors }) {
  return (
    <div>
      <p>Color List</p>
            <ul>
        {colors.map((color, index) => (
          <li key={index} style={{ color: color }}>
            {color}
          </li>
        ))}
      </ul>
    </div>
  )
}