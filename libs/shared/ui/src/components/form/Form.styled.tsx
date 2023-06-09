import { Color, space } from '@mentorship/shared/constants';
import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledForm = styled.form`
  padding: ${space.x8};
  display: grid;

  border: 3px solid ${Color.dodgerblue};
  border-radius: 10px;
`;

export const StyledFormWrapper = styled.div``;
