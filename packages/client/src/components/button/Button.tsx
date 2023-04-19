import { ButtonBaseStyles, ButtonBaseStylesWrapper } from './Button.styled';

type ColorVariant = 'darkRed' | 'dodgerBlue';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  align?: 'start' | 'center' | 'end';
  color?: ColorVariant;
  border?: ColorVariant;
}

const Button = ({ children, onClick, align = 'start', color = 'dodgerBlue', border = 'dodgerBlue' }: ButtonProps) => {
  return (
    <ButtonBaseStylesWrapper>
      <ButtonBaseStyles onClick={onClick} align={align} color={color} border={border}>
        {children}
      </ButtonBaseStyles>
      ;
    </ButtonBaseStylesWrapper>
  );
};

export default Button;
