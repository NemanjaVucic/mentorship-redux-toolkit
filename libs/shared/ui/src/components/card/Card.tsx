import { RoutePath } from '@mentorship/users/shared/constants';
import { useNavigate } from 'react-router-dom';

import { Button } from '../button/Button';
import { Image } from '../image/Image';

import { CardButtonWrapper, CardContainer, CardHeader, CardInfo, DeleteButton } from './Card.styled';

interface CardInfoProps {
  firstName: string;
  lastName: string;
  avatar: string;
}

export const Card = ({ firstName, lastName, avatar }: CardInfoProps) => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(RoutePath.updateUser);
  };
  return (
    <CardContainer>
      <CardHeader>
        <CardInfo>First name: {firstName}</CardInfo>
        <CardInfo>Last name: {lastName}</CardInfo>
      </CardHeader>
      <Image src={avatar} alt={`${firstName}-${lastName}-avatar`} />
      <CardButtonWrapper>
        <Button onClick={handleUpdate}>Edit</Button>
        <DeleteButton>Delete</DeleteButton>
      </CardButtonWrapper>
    </CardContainer>
  );
};
