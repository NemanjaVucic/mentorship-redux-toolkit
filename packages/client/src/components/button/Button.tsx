import { ButtonBaseStyles, ButtonBaseStylesWrapper } from './Button.styled';

type ColorVariant = 'darkRed' | 'dodgerBlue';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  align?: 'start' | 'center' | 'end';
  color?: ColorVariant;
  border?: ColorVariant;
  padding?: string;
}

const Button = ({
  children,
  onClick,
  align = 'start',
  color = 'dodgerBlue',
  border = 'dodgerBlue',
  padding = '12px 24px',
}: ButtonProps) => {
  return (
    <ButtonBaseStylesWrapper>
      <ButtonBaseStyles onClick={onClick} align={align} color={color} border={border} padding={padding}>
        {children}
      </ButtonBaseStyles>
    </ButtonBaseStylesWrapper>
  );
};

export default Button;
