import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  AmountSelector,
  Badge,
  BadgesContainer,
  BuyButton,
  CoffeeCardContainer,
  Price,
} from "./styles";

interface Coffee {
  id: number;
  image: string;
  types: string[];
  title: string;
  description: string;
  price: number;
}

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />
      <BadgesContainer>
        {coffee.types.map((type) => (
          <Badge>{type}</Badge>
        ))}
      </BadgesContainer>
      <h2>{coffee.title}</h2>
      <p className="description">{coffee.description}</p>
      <footer>
        <Price>
          R$ <strong>{coffee.price / 100}</strong>
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
