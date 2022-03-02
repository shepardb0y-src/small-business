import GlobalStyle from "./components/GlobalStyles.js";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
        <Nav />
        <Main />
    
    </div>
  );
}

export default App;
