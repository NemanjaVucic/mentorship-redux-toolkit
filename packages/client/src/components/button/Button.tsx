import { ButtonBaseStyles, ButtonBaseStylesWrapper } from './Button.styled';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  align?: 'start' | 'center' | 'end';
  color?: 'darkRed' | 'dodgerBlue';
  border?: 'darkRed' | 'dodgerBlue';
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
