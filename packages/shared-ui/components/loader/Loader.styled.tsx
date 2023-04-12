import styled from 'styled-components';

import { color } from '../../variables';

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid;
  border-color: ${color.dodgerblue} transparent;
  border-radius: 50%;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
