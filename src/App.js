import { BrowserRouter, Routes, Route } from "react-router-dom";
import Achievments from "./pages/Achievments";
import Contacts from "./pages/Contacts";
import Diplomas from "./pages/Diplomas";
import Galery from "./pages/Galery";
import Home from "./pages/Home";
import Languages from "./pages/Languages";
import Mentions from "./pages/Mentions";
import Passions from "./pages/Passions";
import Skills from "./pages/Skills";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievments" element={<Achievments />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/diplomas" element={<Diplomas />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/passions" element={<Passions />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/galery" element={<Galery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
