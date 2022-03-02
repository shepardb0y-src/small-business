import GlobalStyle from "./components/GlobalStyles.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Services from "./pages/Services.js";
import About from "./pages/About.js";
import Login from "./pages/Login.js";
import {Routes , Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Login' element={<Login/>}/>
          </Routes>
        <Footer/>
    
    </div>
  );
}

export default App;
