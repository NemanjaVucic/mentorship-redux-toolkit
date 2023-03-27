import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { GlobalStyles } from './App.styled';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </>
  );
}

export default App;
