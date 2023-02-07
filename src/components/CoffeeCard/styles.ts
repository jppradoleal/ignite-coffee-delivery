import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme['gray-200']};
  padding: 1rem;
  border-radius: 6px 36px;

  img {
    margin-top: -2rem;
    width: 8rem;
  }

  h2 {
    margin-top: 1rem;
    font-family: "Baloo 2", sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
    white-space: nowrap;
  }

  .description {
    text-align: center;
    margin-top: .5rem;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme["gray-600"]};
  }

  footer {
    margin-top: 2rem;
    display: flex;
    gap: 0.5rem;
    align-items: stretch;
  }
`;

export const Badge = styled.span`
  background-color: ${(props) => props.theme["yellow-100"]};
  padding: 0.25rem 0.675rem;
  font-size: 0.625rem;
  font-weight: bold;
  color: ${(props) => props.theme["yellow-600"]};
  text-transform: uppercase;
  border-radius: 16px;
  margin-top: 1rem;
`;

export const Price = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme["gray-800"]};
  margin-right: 0.5rem;
  white-space: nowrap;
  align-self: center;

  strong {
    font-size: 1.5rem;
    font-family: "Baloo 2", sans-serif;
    font-weight: bolder;
  }
`;

export const AmountSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme["gray-400"]};
  button {
    color: ${(props) => props.theme["purple-400"]};
    font-family: "Roboto", sans-serif;
    background: 0;
    border: 0;
  }

  span {
    font-weight: bold;
  }
`;

export const BuyButton = styled.button`
  border: 0;
  background: ${(props) => props.theme["purple-600"]};
  padding: 0.5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    line-height: 0;
    color: ${(props) => props.theme["white"]};
  }
`;
