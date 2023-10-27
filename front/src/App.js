import './App.css';
import Top from './components/designs/Top';
import Main from './components/pages/Main';
import Home from './components/pages/Home';
import List from './components/pages/List';
import Footer from './components/designs/Footer';
import { Routes, Route } from 'react-router-dom';

const NotFound = () => <div>404 Not Found</div>; 

function App() {
  return (
    <div className="App">
      <Top/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charlist" element={<List />} />
        <Route path="/results" element={<Main />} />
        <Route path="*" element={<NotFound />} /> {/* 404 페이지를 표시하기 위한 Route 설정 */}
      </Routes>
      <Footer/>
    </div>
  );
}


export default App;