import { Color } from '@mentorship/shared/constants';
import styled from 'styled-components';

import { ImageBody } from '../image/Image.styled';

export const AvatarImage = styled(ImageBody)<{ $isSelected: boolean }>`
  position: static;
  border: ${({ $isSelected }) => ($isSelected ? `4px solid ${Color.dodgerblue}` : `2px solid ${Color.gray}`)};
  transition: 0.35s ease-in-out;

  &:hover {
    transform: scale(1.6);
    cursor: pointer;
  }
`;
