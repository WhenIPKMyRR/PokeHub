import { createContext } from "react";
import useContinuousState from "./utils/useContinuousState";
import { ThemeProvider, DefaultTheme } from "styled-components";
import  lightTheme  from "./styles/themes/lightTheme";
import darkTheme from "./styles/themes/darkTheme"
import Routies from "./routes/Routes";
import { GlobalStyle } from "./styles/globalStyle";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import { AuthProvider } from "./context/authProvider/authProvider";
import { useAuth } from "./utils/useAuth";


export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});


const App = () =>{
  
  const { user } = useAuth()
  const [theme, setTheme] = useContinuousState<DefaultTheme>('theme', lightTheme)

  const toggleTheme = () =>{
    setTheme(theme.title === 'lightTheme' ? darkTheme : lightTheme)
  }
  
  return (
    <AuthProvider>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <Header/>
          <Routies/>
          { user && <Nav/>}
        </ThemeProvider>
      </ThemeContext.Provider>
    </AuthProvider>
  );
}

export  default App;

