import './App.css';
import LoginPage from './views/LoginPage';
import TranslationPage from './views/TranslationPage';
import ProfilePage from './views/ProfilePage';
import Header from './components/Header/Header';

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <div className="App">
        <Routes>

          <Route path = "/" element = {<LoginPage/>}></Route>
          <Route path = "/translation" element = {<TranslationPage/>}></Route>
          <Route path = "/profile" element = {<ProfilePage/>}></Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
