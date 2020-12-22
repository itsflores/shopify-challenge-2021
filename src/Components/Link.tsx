import styled from "styled-components";

const StrongLink = styled.a`
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
  color: var(--green);
  cursor: pointer;
  text-decoration: none;
`;

type LinkProps = {
  children?: React.ReactFragment | HTMLCollection | string;
  onClick?: (e?: React.MouseEvent) => void;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, onClick, href }: LinkProps) => (
  <StrongLink href={href} onClick={onClick}>
    {children}
  </StrongLink>
);

export default Link;
