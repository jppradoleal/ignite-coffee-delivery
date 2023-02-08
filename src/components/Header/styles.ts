import styled from "styled-components";

export const HeaderContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  @media (max-width: 768px) {
    padding: 2rem 5rem;
  }
`;

export const Logo = styled.img`
  width: 5.3125rem;
  height: auto;
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const CityButton = styled.button`
  border: 0;
  background: ${(props) => props.theme["purple-100"]};
  color: ${(props) => props.theme["purple-600"]};
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;

  svg {
    fill: ${(props) => props.theme["purple-400"]};
  }
`;

export const CartButton = styled.a`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme["yellow-100"]};
  padding: 0.5rem;
  border-radius: 8px;

  svg {
    fill: ${(props) => props.theme["yellow-400"]};
  }
`;
