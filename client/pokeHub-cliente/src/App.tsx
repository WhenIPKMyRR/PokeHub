import { useState } from 'react';
import ThemeProvider from './styles/themeProvider';
import GlobalStyle from './styles/globalStyle';
// import Header from '../components/Header';
import './App.css';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  
  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <GlobalStyle/>
      {/* <Header isDarkMode={isDarkMode}/>
      <Routies isDarkMode={isDarkMode}/> */}
    </ThemeProvider>
  );
}
