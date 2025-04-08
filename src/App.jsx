// import './App.css'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {HomePage} from './pages/first-page/first-page';
// import { MainPage } from './pages/main-page/main-page';  
// import {LoginPage} from './pages/login-page/login-paje';
// import { AiHelper } from './pages/ai-helper-page/ai-helper-page';
// import {NotFoundPage} from './pages/404/error'


// function App() {

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/main" element={<MainPage />} />
//         <Route path='/login' element= {<LoginPage/>}></Route>
//         <Route path='/AI-helper' element= {<AiHelper/>}></Route>
//         <Route path='*' element={<NotFoundPage/>}></Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App



import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/first-page/first-page';
import { MainPage } from './pages/main-page/main-page';  
import { LoginPage } from './pages/login-page/login-paje';
import { AiHelper } from './pages/ai-helper-page/ai-helper-page';
import { NotFoundPage } from './pages/404/error';

function App() {
  return (
    <Router basename="/movie-mapper">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/AI-helper" element={<AiHelper />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;





