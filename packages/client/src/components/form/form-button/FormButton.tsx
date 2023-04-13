import { StyledButtonWrapper, StyledFormButton } from './FormButton.styled';

interface IFormButton {
  name: string;
}

const FormButton = ({ name }: IFormButton) => {
  return (
    <StyledButtonWrapper>
      <StyledFormButton>{name}</StyledFormButton>
    </StyledButtonWrapper>
  );
};

export default FormButton;
