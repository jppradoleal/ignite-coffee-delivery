import styled from "styled-components";

export const ItemGridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
  padding: 0 10rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 5rem;
  }
`
