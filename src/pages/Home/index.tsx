import { CoffeeCard } from "./components/CoffeeCard";
import { Intro } from "./components/Intro";
import { ProductsContainer, ItemGridContainer } from "./styles";

export function Home() {
  return (
    <>
      <Intro />
      <ProductsContainer>
        <h2>Nossos cafés</h2>
        <ItemGridContainer>
          {new Array(15).fill(0).map((_) => (
            <CoffeeCard />
          ))}
        </ItemGridContainer>
      </ProductsContainer>
    </>
  );
}
