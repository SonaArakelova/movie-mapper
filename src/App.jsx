import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage} from './pages/first-page/first-page';
import { MainPage } from './pages/main-page/main-page';  
import {LoginPage} from './pages/login-page/login-paje';
import { AiHelper } from './pages/ai-helper-page/ai-helper-page';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path='/login' element= {<LoginPage/>}></Route>
        <Route path='/AI-helper' element= {<AiHelper/>}></Route>
      </Routes>
    </Router>
  );
}

export default App
