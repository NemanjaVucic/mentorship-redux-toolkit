import { Button } from '../button/Button';
import { Image } from '../image/Image';

import { CardButtonWrapper, CardContainer, CardHeader, CardInfo, DeleteButton } from './Card.styled';

interface CardInfoProps {
  firstName: string;
  lastName: string;
  avatar: string;
}

export const Card = ({ firstName, lastName, avatar }: CardInfoProps) => {
  return (
    <CardContainer>
      <CardHeader>
        <CardInfo>First name: {firstName}</CardInfo>
        <CardInfo>Last name: {lastName}</CardInfo>
      </CardHeader>
      <Image src={avatar} alt={`${firstName}-${lastName}-avatar`} />
      <CardButtonWrapper>
        <Button>Edit</Button>
        <DeleteButton>Delete</DeleteButton>
      </CardButtonWrapper>
    </CardContainer>
  );
};
