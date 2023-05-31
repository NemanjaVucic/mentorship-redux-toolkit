import { Navigation } from '@mentorship/shared/ui';
import { PageRouter } from '@mentorship/users/router';
import { BrowserRouter } from 'react-router-dom';

import { BodyContainer, GlobalStyles } from './App.styled';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navigation />
        <BodyContainer>
          <PageRouter />
        </BodyContainer>
      </BrowserRouter>
    </>
  );
};
