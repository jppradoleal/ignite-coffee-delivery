import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { AmountSelector, Badge, BuyButton, CoffeeCardContainer, Price } from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src="americano.png" alt="" />
      <Badge>Tradicional</Badge>
      <h2>Expresso Tradicional</h2>
      <p className="description">
        O tradicional café feito com água quente e grãos moídos
      </p>
      <footer>
        <Price>
          R$ <strong>9,90</strong>
        </Price>

        <AmountSelector>
          <button>
            <Minus size={12} weight="bold" />
          </button>
          <span>1</span>
          <button>
            <Plus size={12} weight="bold" />
          </button>
        </AmountSelector>
        <BuyButton>
          <ShoppingCart size={24} weight="fill" />
        </BuyButton>
      </footer>
    </CoffeeCardContainer>
  );
}
