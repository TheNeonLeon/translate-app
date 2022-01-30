import './App.css';
import {BrowserRouter, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
function App() {
  return (
    <BrowserRouter>
    <Header />
      <div className="App">
        <Routes>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
