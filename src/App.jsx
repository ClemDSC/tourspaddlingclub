import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Activities from "./Pages/Activities";
import JoinUs from "./Pages/JoinUs";
import Actu from "./Pages/Actu";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Legal from "./Pages/Legal";
import Faq from "./Pages/Faq";
import Blog from "./Components/actu/Blog";
import Tips from "./Components/actu/Tips";
import Sessions from "./Components/actu/Sessions";
import Member from "./Pages/Member";
import MemberDashboard from "./Components/member/MemberDashboard";
import FormHoraireTarif from "./Components/member/FormHoraireTarif";
import FormArticle from "./Components/member/FormArticle";
import EditArticle from "./Components/member/EditArticle";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="club">
          <Route path="activities" element={<Activities />} />
          <Route path="join-us" element={<JoinUs />} />
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="blog">
          <Route path="sessions" element={<Sessions />} />
          <Route path="tips" element={<Tips />} />
          <Route path="actu" element={<Actu />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="mentions-legales" element={<Legal />} />
        <Route path="faq" element={<Faq />} />

        <Route path="dashboard" element={<Member />}>
          <Route index element={<MemberDashboard />} />{" "}
          <Route path="post-horaires-tarifs" element={<FormHoraireTarif />} />
          <Route path="post-article" element={<FormArticle />} />
          <Route path="edit-article/:id" element={<EditArticle />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
