import { ThemeProvider } from "styled-components";
import { CoffeeCard } from "./components/CoffeeCard";
import { ItemGrid } from "./components/ItemGrid";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ItemGrid />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
