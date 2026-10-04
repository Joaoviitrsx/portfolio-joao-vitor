import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./sections/Intro";
import WhoIAm from "./WhoIam";
import WhatIBuild from "./sections/WhatIBuilt";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  const [isNavbarWhite, setIsNavbarWhite] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("sobre");

      if (!section) return;

      const rect = section.getBoundingClientRect();

      setIsNavbarWhite(rect.top <= 80 && rect.bottom >= 80);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <div className="fixed top-0 left-0 z-50 w-full px-8 py-6">
        <Navbar isWhite={isNavbarWhite} />
      </div>

      <Intro />
      <WhoIAm />
      <WhatIBuild />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
