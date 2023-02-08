import { CoffeeCard } from "../CoffeeCard";
import { ItemGridContainer, ProductsContainer } from "./styles";

const coffees = new Array(15).fill(0);

export function Products() {
  return (
    <ProductsContainer>
      <h2>Nossos Cafés</h2>
      <ItemGridContainer>
        {coffees.map((_) => (
          <CoffeeCard />
        ))}
      </ItemGridContainer>
    </ProductsContainer>
  );
}
