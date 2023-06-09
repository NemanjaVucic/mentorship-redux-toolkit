import { space } from '@mentorship/shared/constants';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  max-width: 1280px;
  width: 90%;
  margin: auto;
}


`;

export const BodyContainer = styled.div`
  margin: ${space.x8} 0;
`;
