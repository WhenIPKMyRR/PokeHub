import { createContext } from "react";
import useContinuousState from "./utils/useContinuousState";
import { ThemeProvider, DefaultTheme } from "styled-components";
import  lightTheme  from "./styles/themes/lightTheme";
import darkTheme from "./styles/themes/darkTheme"
import Routies from "./routes/Routes";
import { GlobalStyle } from "./styles/globalStyle";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";


export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});


const App = () =>{
  const [theme, setTheme] = useContinuousState<DefaultTheme>('theme', lightTheme)

  const toggleTheme = () =>{
    setTheme(theme.title === 'lightTheme' ? darkTheme : lightTheme)
  }
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header/>
        <Routies/>
        <Nav/>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export  default App;

