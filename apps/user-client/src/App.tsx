import { Navigation } from '@mentorship/shared/ui';
import { BrowserRouter } from 'react-router-dom';

import { BodyContainer, GlobalStyles } from './App.styled';
import PageRouter from './pages/router';

function App() {
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
}

export default App;
