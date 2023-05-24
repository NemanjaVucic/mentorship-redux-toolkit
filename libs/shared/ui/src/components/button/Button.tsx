import { ButtonBaseStyles } from './Button.styled';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => <ButtonBaseStyles {...props} />;
