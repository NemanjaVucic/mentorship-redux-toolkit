import styled from 'styled-components';

import { color, space } from '../../variables';

// import { IFormProps } from './Form';

export const StyledFormContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

// type TStyledForm = Omit<IFormProps, 'onSubmit'> & {
//   onSubmit: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>['onSubmit'];
//   form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
// };

export const StyledForm = styled.form`
  padding: ${space.x8};
  display: grid;

  border: 3px solid ${color.dodgerblue};
  border-radius: 10px;
`;

export const StyledFormWrapper = styled.div``;
