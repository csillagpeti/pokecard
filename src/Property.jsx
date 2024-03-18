function Property({name, rating, price})
  {
    return(
      <div>
      <li>{name}</li>
      <li>{rating}⭐</li>
      <li>${price} / night</li>
      </div>
    )
  }

export default Property;