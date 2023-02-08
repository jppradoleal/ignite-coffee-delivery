import { ThemeProvider } from "styled-components";
import { Intro } from "./components/Intro";
import { Products } from "./components/Products";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Intro />
      <Products />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
