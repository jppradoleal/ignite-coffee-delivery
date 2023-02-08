import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  padding: 5.875rem 10rem;
  background: url("background.png") no-repeat center;
  background-size: 100% 100%;
  gap: 3.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5.875rem 5rem;
  }
`;

export const TextContainer = styled.div`
  flex: 0.5;
  justify-self: stretch;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    line-height: 1.3;
  }

  & > p {
    margin-top: 1rem;
  }
`;

export const BadgeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 2.5rem;
  margin-top: 4.125rem;

  p {
    white-space: nowrap;
  }
`;

const BADGE_COLORS = {
  yellow: "yellow-400",
  orange: "yellow-600",
  gray: "gray-700",
  purple: "purple-400",
} as const;

interface BadgeProps {
  color: keyof typeof BADGE_COLORS;
}

export const Badge = styled.p<BadgeProps>`
  font-size: 1rem;
  display: flex;
  align-items: center;

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 100%;
    margin-right: 0.75rem;
    background: ${(props) => props.theme[BADGE_COLORS[props.color]]};
    svg {
      line-height: 0;
      fill: ${(props) => props.theme["white"]};
    }
  }
`;

export const HeroImage = styled.img`
  align-self: center;
  /* width: 100%; */
`;
