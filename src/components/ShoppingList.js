import React from 'react'
import {plantList} from "../data/plantList"
function ShoppingList() {

  return (
    <ul>
      {plantList.map((plant) => (
        <li key={ plant.id }>
            {plant.name}
            {plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
        </li>
      ))}
    </ul> 
  )
}

export default ShoppingList
