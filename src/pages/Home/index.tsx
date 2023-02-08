import { useEffect, useState } from "react";
import { CoffeeCard } from "./components/CoffeeCard";
import { Intro } from "./components/Intro";
import { ProductsContainer, ItemGridContainer } from "./styles";

export function Home() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setCoffees(data.products);
      });
  }, []);

  return (
    <>
      <Intro />
      <ProductsContainer>
        <h2>Nossos cafés</h2>
        <ItemGridContainer>
          {coffees.map((coffee) => (
            <CoffeeCard coffee={coffee} />
          ))}
        </ItemGridContainer>
      </ProductsContainer>
    </>
  );
}
