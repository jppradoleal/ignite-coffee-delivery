import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  Badge,
  BadgeContainer,
  HeroImage,
  IntroContainer,
  TextContainer,
} from "./styles";

export function Intro() {
  return (
    <IntroContainer>
      <TextContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <BadgeContainer>
          <Badge color="orange">
            <span>
              <ShoppingCart size={16} weight="fill" />
            </span>
            Compra simples e segura
          </Badge>
          <Badge color="yellow">
            <span>
              <Package size={16} weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </Badge>
          <Badge color="gray">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            Entrega rápida e rastreada
          </Badge>
          <Badge color="purple">
            <span>
              <Coffee size={16} weight="fill" />
            </span>
            O café chega fresquinho até você
          </Badge>
        </BadgeContainer>
      </TextContainer>
      <HeroImage src="hero.png" />
    </IntroContainer>
  );
}
