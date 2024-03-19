function ShoppingListItem({item, quantity, completed}) {
  return (
    <li
      style={{
        color: completed ? "grey" : "white", textDecoration: completed && "line-through"
      }}>
      {item} - {quantity}
    </li>
  )
}

export default ShoppingListItem;