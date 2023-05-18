import { ButtonBaseStyles } from './Button.styled';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <ButtonBaseStyles onClick={onClick}>{children}</ButtonBaseStyles>;
};
