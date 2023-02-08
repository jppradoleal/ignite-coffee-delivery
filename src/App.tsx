import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Products } from "./components/Products";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Intro />
      <Products />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
