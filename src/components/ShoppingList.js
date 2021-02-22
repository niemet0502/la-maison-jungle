import React from 'react'
import {plantList} from "../data/plantList"
import CareScale from "./CareScale"
function ShoppingList() {

  return (
    <ul>
      {plantList.map((plant) => (
        <li key={ plant.id }>
            {plant.name}
            {plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
            <CareScale scaleValue={plant.light} />
        </li>
      ))}
    </ul> 
  )
}

export default ShoppingList
