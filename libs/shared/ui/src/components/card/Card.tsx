import { Button } from '../button/Button';
import { Image } from '../image/Image';

import { ButtonWrapper, CardContainer, CardHeader, CardInfo, DeleteButton } from './Card.styled';

export interface CardInfoProps {
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
      <ButtonWrapper>
        <Button>Edit</Button>
        <DeleteButton>Delete</DeleteButton>
      </ButtonWrapper>
    </CardContainer>
  );
};
