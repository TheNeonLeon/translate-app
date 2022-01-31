import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TranslationPage from './views/TranslationPage';
import Header from './components/Header/Header';
function App() {
  return (
    <BrowserRouter>
    <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<TranslationPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
