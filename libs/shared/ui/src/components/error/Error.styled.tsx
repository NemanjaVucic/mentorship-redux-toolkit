import { Color, font, space } from '@mentorship/shared/constants';
import styled from 'styled-components';

export const ErrorImageContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const ErrorMessage = styled.p`
  margin-bottom: ${space.x3};
  font-size: ${font.size.large};
  font-weight: ${font.weight.bold};
  color: ${Color.gray};
`;
