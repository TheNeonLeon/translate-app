import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './views/ProfilePage';
import Header from './components/Header/Header'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <div className="App">
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
