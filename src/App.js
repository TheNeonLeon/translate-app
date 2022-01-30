import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TranslationPage from './views/TranslationPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<TranslationPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
