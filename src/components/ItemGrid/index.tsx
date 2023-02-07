import { useEffect } from "react"
import { CoffeeCard } from "../CoffeeCard"
import { ItemGridContainer } from "./styles"

const coffees = new Array(15).fill(0)

export function ItemGrid () {
  return (
    <ItemGridContainer>
      {coffees.map(_ => <CoffeeCard />)}
    </ItemGridContainer>
  )
}