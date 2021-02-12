import React from 'react'

function ShoppingList() {

  const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

  return (
    <ul>
      {plantList.map((plant) => (
        <li key={ plant.id }>
            {plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
        </li>
      ))}
    </ul> 
  )
}

export default ShoppingList
