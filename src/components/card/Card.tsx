import Button from '../button/Button';
import { ButtonWrapper, CardBody, CardContainer, CardHeader, DeleteButton, Avatar } from './Card.styled';
import CoverImage from '../../assets/avatar.jpg';

const Card = () => {
  return (
    <CardContainer>
      <CardHeader>
        <h3>First Name: Boris</h3>
        <h3>Last Name: Lazarevic</h3>
      </CardHeader>
      <CardBody>
        <Avatar src={CoverImage} alt="cover-image" />
      </CardBody>
      <ButtonWrapper>
        <Button>Edit</Button>
        <DeleteButton>Delete</DeleteButton>
      </ButtonWrapper>
    </CardContainer>
  );
};

export default Card;
