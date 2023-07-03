import { createContext } from "react";
import useContinuousState from "./services/useContinuousState";
import { ThemeProvider, DefaultTheme } from "styled-components";
import lightTheme from "./styles/themes/lightTheme";
import darkTheme from "./styles/themes/darkTheme"
import Routies from "./routes/Routes";
import { GlobalStyle } from "./styles/globalStyle";
import Header from "./components/Header/header";
import Nav from "./components/Nav";
import { AuthProvider } from "./context/AuthProvider/authProvider";


export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => { },
});


const App = () => {

  // const { user } = useAuth()
  const [theme, setTheme] = useContinuousState<DefaultTheme>('theme', lightTheme)

  const toggleTheme = () => {
    setTheme(theme.title === 'lightTheme' ? darkTheme : lightTheme)
  }

  return (
    <AuthProvider>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Routies />
          <Nav />
        </ThemeProvider>
      </ThemeContext.Provider>
    </AuthProvider>
  );
}

export default App;

