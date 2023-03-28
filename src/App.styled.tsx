import styled, { createGlobalStyle } from 'styled-components';
import { space } from './variables';

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
  margin-top: ${space.x20}px;
  text-align: center;
`;
