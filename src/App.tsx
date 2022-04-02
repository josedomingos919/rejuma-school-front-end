import { RootRouter } from "./routes";
import { GlobalStyle } from "./styles/global";
import "./assets/fonts/roboto/index.css";

function App() {
  return (
    <>
      <RootRouter />
      <GlobalStyle />
    </>
  );
}

export default App;
