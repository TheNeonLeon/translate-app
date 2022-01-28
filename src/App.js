import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './views/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
