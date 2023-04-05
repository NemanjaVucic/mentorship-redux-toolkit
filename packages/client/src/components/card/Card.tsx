import { Avatar, ButtonWrapper, CardBody, CardContainer, CardHeader, CardInfo, DeleteButton } from './Card.styled';
import CoverImage from '../../assets/avatar.jpg';
import Button from '../button/Button';

const Card = () => {
  // TODO: Replace mocked data with users from  the API, Instead of using Cover Image there will be avatar from the API

  return (
    <CardContainer>
      <CardHeader>
        <CardInfo>First Name: </CardInfo>
        <CardInfo>Last Name: </CardInfo>
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
