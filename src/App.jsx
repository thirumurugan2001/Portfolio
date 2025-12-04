import HomePage from './component/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Hireme from './component/Hireme';
import StartProject from './component/StartProject';
import RND from './component/RND';
import Chatbot from './component/Chatbot';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hire-me" element={<Hireme />} />
          <Route path="/start-project" element={<StartProject />} />
          <Route path="/research-development" element={<RND />} />
          <Route path="/ask-about-me" element={<Chatbot />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;