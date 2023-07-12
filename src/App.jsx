import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Club from "./Pages/Club";
import Activities from "./Pages/Activities"
import JoinUs from "./Pages/JoinUs"
import Shop from "./Pages/Shop"
import Actu from "./Pages/Actu"
import Contact from "./Pages/Contact"

import Footer from "./Components/Footer";
import Legal from "./Pages/Legal";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="club">
          <Route path="" element={<Club />} />
          <Route path="activities" element={<Activities />} />
          <Route path="join-us" element={<JoinUs />} />
        </Route>
        <Route path="shop" element={<Shop />} />
        <Route path="actu" element={<Actu />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mentions-legales" element={<Legal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
