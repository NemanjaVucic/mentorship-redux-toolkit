import styled from 'styled-components';
import { color, space } from '../../variables';
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

export const CardBody = styled.div`
  margin-bottom: ${space.x3};
  max-width: 100%;
  height: 0;
  padding-bottom: 56.25%; // This represents the aspect ratio of the 16:9
  position: relative;
`;

export const Avatar = styled.img.attrs(({ src }) => ({
  src,
}))`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
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
