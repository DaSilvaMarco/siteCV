import { Routes, Route, BrowserRouter } from "react-router-dom";
import Achievments from "./pages/Achievments";
import ErrorPage from "./pages/ErrorPage";
import Experiences from "./pages/Experiences";
import Galery from "./pages/Galery";
import Home from "./pages/Home";
import Mentions from "./pages/Mentions";
import Passions from "./pages/Passions";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievments" element={<Achievments />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/passions" element={<Passions />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
