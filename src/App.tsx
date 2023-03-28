import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components/navigation/Navigation';
import { GlobalStyles } from './App.styled';
import PageRouter from './pages/router';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navigation />
        <PageRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
