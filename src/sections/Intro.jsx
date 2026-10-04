import { useEffect, useRef, useState } from "react";
import SocialLinks from "../components/SocialLinks";
import Profile from "../components/Profile";

function Intro() {
  const sectionRef = useRef(null);
  const [transitionProgress, setTransitionProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const rawProgress = -rect.top / (viewportHeight * 0.7);

      const progress = Math.min(Math.max(rawProgress, 0), 1);

      setTransitionProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const startBackground = {
    r: 229,
    g: 229,
    b: 229,
  };

  const endBackground = {
    r: 55,
    g: 102,
    b: 70,
  };

  const r = Math.round(
    startBackground.r +
      (endBackground.r - startBackground.r) * transitionProgress,
  );

  const g = Math.round(
    startBackground.g +
      (endBackground.g - startBackground.g) * transitionProgress,
  );

  const b = Math.round(
    startBackground.b +
      (endBackground.b - startBackground.b) * transitionProgress,
  );

  const backgroundColor = `rgb(${r}, ${g}, ${b})`;

  const textValue = Math.round(250 * transitionProgress);

  const textColor = `rgb(${textValue}, ${textValue}, ${textValue})`;

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen overflow-hidden px-6 py-6 md:px-8"
      style={{ backgroundColor }}
    >
      <div className="mt-16 ml-0 md:ml-[8%]">
        <SocialLinks />
      </div>

      <main className="flex flex-col pt-32 pl-0 md:pt-50 md:pl-[8%]">
        <h1 className="max-w-275 text-5xl font-semibold leading-[0.96] tracking-tight sm:text-6xl md:text-8xl">
          Hello, I build the web.
          <br />
          Web Developer and Experience Creator
        </h1>
      </main>

      <div
        className="absolute bottom-24 left-6 md:bottom-27 md:left-[9%]"
        style={{ color: textColor }}
      >
        <Profile />
      </div>

      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-[3%]">
        <a
          href="https://www.instagram.com/joavitrsx/?__pwa=1"
          target="_blank"
          rel="noreferrer"
          className="group relative inline-block text-sm"
          style={{ color: textColor }}
        >
          @joavitrsx
          <span
            className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
            style={{ backgroundColor: "currentColor" }}
          />
        </a>
      </div>

      <div className="absolute bottom-6 right-6 text-right md:bottom-8 md:right-8">
        <p className="text-xs sm:text-sm" style={{ color: textColor }}>
          A lot of coffee involved in this.
        </p>
      </div>
    </section>
  );
}

export default Intro;
