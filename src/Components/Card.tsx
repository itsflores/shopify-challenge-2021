import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem 0;
  border: solid 1px var(--surface);
  transition: box-shadow 300ms ease;
  border-radius: 0.5rem;
  height: min-content;
  background-color: var(--white);

  & label:not(.detail) {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 769px) {
    &:hover {
      box-shadow: var(--hover);
    }
  }
`;

interface CardProps {
  children?: React.ReactFragment | HTMLCollection | string;
  style?: React.CSSProperties | undefined;
}

const Card = ({ children, style }: CardProps) => (
  <CardContainer style={style}>{children}</CardContainer>
);

export default Card;
