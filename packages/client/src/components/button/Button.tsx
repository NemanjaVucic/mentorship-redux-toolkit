import { ButtonBaseStyles } from './Button.styled';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => <ButtonBaseStyles {...props} />;

export default Button;
