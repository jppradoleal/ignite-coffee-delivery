import styled from "styled-components";

export const ProductsContainer = styled.section`
  padding: 0 10rem;

  &>h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bolder;
    font-size: 2rem;
    margin-bottom: 3.375rem;
  }

  @media (max-width: 768px) {
    padding: 0 5rem;
  }
`;

export const ItemGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
  margin-bottom: 9.875rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
