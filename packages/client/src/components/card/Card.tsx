import Button from '../button/Button';
import Image from '../image/Image';

import { ButtonWrapper, CardContainer, CardHeader, CardInfo } from './Card.styled';

interface CardInfoProps {
  firstName: string;
  lastName: string;
  avatar: string;
}

const Card = ({ firstName, lastName, avatar }: CardInfoProps) => {
  return (
    <CardContainer>
      <CardHeader>
        <CardInfo>First name: {firstName}</CardInfo>
        <CardInfo>Last name: {lastName}</CardInfo>
      </CardHeader>
      <Image src={avatar} alt={`${firstName}-${lastName}-avatar`} />
      <ButtonWrapper>
        <Button>Edit</Button>
        <Button color="darkRed" border="darkRed">
          Delete
        </Button>
      </ButtonWrapper>
    </CardContainer>
  );
};

export default Card;
