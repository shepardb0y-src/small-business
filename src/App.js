import GlobalStyle from "./components/GlobalStyles.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Services from "./pages/Services.js";
import About from "./pages/About.js";
import Login from "./pages/Login.js";
import Data from "./pages/Data.js";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./context/UserContext";
function App() {
  const [user, setUser] = useState("");


console.log(user)

  return (
    <div className="App">
      <GlobalStyle />
      <UserContext.Provider value={user}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login setUser={setUser} />} />
          <Route path="/data" element={<Data />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
