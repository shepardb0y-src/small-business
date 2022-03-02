import { Container } from "./components/Container.styled.js";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
function App() {
  return (
    <div className="App">
      <Container>
        <Nav />
        <Main />
      </Container>
    </div>
  );
}

export default App;
