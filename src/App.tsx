import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SuperheroesPage from './pages/SuperheroesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SuperheroesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
