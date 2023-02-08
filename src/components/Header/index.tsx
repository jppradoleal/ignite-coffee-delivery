import { MapPin, ShoppingCart } from "phosphor-react";
import {
  CartButton,
  CityButton,
  HeaderContainer,
  Logo,
  MenuContainer,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Logo src="logo.png"/>
      <MenuContainer>
        <CityButton>
          <MapPin size="22" weight="fill" />
          Jacareí, SP
        </CityButton>
        <CartButton>
          <ShoppingCart size="22" weight="fill" />
        </CartButton>
      </MenuContainer>
    </HeaderContainer>
  );
}
