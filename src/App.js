import logo from './logo.svg';
import './App.css';
import LoginPage from './views/LoginPage';
import TranslationPage from './views/TranslationPage';
import ProfilePage from './views/ProfilePage';

function App() {
  return (
    <BrowserRouter>
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
