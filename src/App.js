import logo from './logo.svg';
import './App.css';
import TranslationPage from './views/TranslationPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/translation" element={<TranslationPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
