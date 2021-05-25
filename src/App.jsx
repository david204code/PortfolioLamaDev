import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portforlio from "./components/portfolio/Portfolio";
import Works from "./components/work/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  // state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu />
      <div className="sections">
        <Intro />
        <Portforlio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
