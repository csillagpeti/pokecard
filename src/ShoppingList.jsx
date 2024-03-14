function ShoppingList({ items }) {
  return (
    <ul>
      {items.map(i => (
        <li key={i.id}
          style={{
            color: i.completed ? "grey" : "white", textDecoration: i.completed && "line-through"
          }}>
          {i.item} - {i.quantity}
        </li>
      ))}
    </ul>)
}


export default ShoppingList;

// const data = [
//   {item: 'eggs', quantity: 12, completed: false},
//   {item: 'milk', quantity: 4, completed: true},
//   {item: 'butter', quantity: 1, completed: false},
//   {item: 'carrots', quantity: 6, completed: true},
//   {item: 'chicken breasts', quantity: 2, completed: false}
// ]