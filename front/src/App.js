import './App.css';
import Top from './components/designs/Top';
import Main from './components/pages/Main';
import Home from './components/pages/Home';
import List from './components/pages/List';
import Footer from './components/designs/Footer';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './components/style/globalStyle'
import { darkTheme, lightTheme } from './components/style/theme'
import { ThemeProvider } from 'styled-components';
import { themeState } from './recoil/atom'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react';

const NotFound = () => <div>404 Not Found</div>;


function App() {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState)
  const theme = currentTheme === "LIGHT" ? darkTheme : lightTheme;
  useEffect(() => {
    const localThemeMode = window.localStorage.getItem("theme" || "LIGHT");
    setCurrentTheme(localThemeMode);
  }, [currentTheme])

  return (
    <div className="App">
      <Top />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/charlist" element={<List />} />
          <Route path="/results" element={<Main />} />
          <Route path="*" element={<NotFound />} /> {/* 404 페이지를 표시하기 위한 Route 설정 */}
        </Routes>
      </ThemeProvider>
      <Footer />
    </div>
  );
}


export default App;