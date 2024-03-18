function ShoppingListItem({key, item, quantity, completed}) {
  return (
    <>
      <ul>
        <li key={key}
          style={{
            color: completed ? "grey" : "white", textDecoration: completed && "line-through"
          }}>
          {item} - {quantity}
        </li>
      </ul>
    </>
  )
}

export default ShoppingListItem;