import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </>
  );
}

export default App;
