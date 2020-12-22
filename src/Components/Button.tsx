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
  width: min-content;

  &:disabled {
    background-color: var(--surface);
  }

  &:focus {
    outline: none;
  }

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

export type ButtonProps = {
  secondary?: boolean;
  disabled?: boolean;
  children?: React.ReactFragment | HTMLCollection | string;
  onClick: (e?: React.MouseEvent) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  secondary,
  disabled,
  onClick,
  children,
  style,
  ...other
}: ButtonProps) =>
  secondary ? (
    <SecondaryButton
      style={style}
      disabled={disabled}
      onClick={onClick}
      {...other}
    >
      <strong>{children}</strong>
    </SecondaryButton>
  ) : (
    <PrimaryButton
      style={style}
      disabled={disabled}
      onClick={onClick}
      {...other}
    >
      <strong>{children}</strong>
    </PrimaryButton>
  );

export default Button;
