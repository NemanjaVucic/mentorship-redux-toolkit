import styled from 'styled-components';

import { color, font, space } from '../../variables';
import { ButtonBaseStyles } from '../button/Button.styled';

export const CardContainer = styled.div`
  width: 100%;
  padding: ${space.x5};
  border: 3px solid ${color.dodgerblue};
  border-radius: 10px;
`;

export const CardHeader = styled.div`
  margin-bottom: ${space.x3};
`;

export const CardInfo = styled.div`
  font-size: ${font.size.medium};
  font-weight: ${font.weight.bold};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const DeleteButton = styled(ButtonBaseStyles)`
  color: ${color.darkred};
  border: 2px solid ${color.darkred};
`;
