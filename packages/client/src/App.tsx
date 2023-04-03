import { BrowserRouter } from 'react-router-dom';

import { BodyContainer, GlobalStyles } from './App.styled';
import { Navigation } from './components/navigation/Navigation';
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
