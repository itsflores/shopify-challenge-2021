import styled, { css } from "styled-components";

const buttonStyles = css`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  border: none;
  transition: box-shadow 300ms ease;
  cursor: pointer;
  justify-content: center;
  color: var(--white);

  @media (min-width: 769px) {
    &:hover {
      box-shadow: var(--hover);
    }
  }
`;

const PrimaryButton = styled.button`
  ${buttonStyles}
  background-color: var(--green);
`;

const SecondaryButton = styled.button`
  ${buttonStyles}
  background-color: var(--black);
`;

type ButtonProps = {
  secondary?: boolean;
  padded?: boolean;
  disabled?: boolean;
  children?: React.ReactFragment | HTMLCollection | string;
  onClick: (e?: React.MouseEvent) => void;
  size?: "small" | "medium";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonComponent = ({
  secondary,
  padded,
  disabled,
  onClick,
  children,
  ...other
}: ButtonProps) =>
  secondary ? (
    <SecondaryButton
      style={{ margin: padded ? "1rem" : 0 }}
      disabled={disabled}
      onClick={onClick}
      {...other}
    >
      <strong>{children}</strong>
    </SecondaryButton>
  ) : (
    <PrimaryButton
      style={{ margin: padded ? "1rem" : 0 }}
      disabled={disabled}
      onClick={onClick}
      {...other}
    >
      <strong>{children}</strong>
    </PrimaryButton>
  );

export default ButtonComponent;
