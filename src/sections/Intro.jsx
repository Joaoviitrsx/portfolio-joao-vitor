import { useEffect, useRef, useState } from "react";
import SocialLinks from "../components/SocialLinks";
import Profile from "../components/Profile";

const GRAY = [229, 229, 229];
const GREEN = [55, 102, 70];
const BLACK = [0, 0, 0];
const WHITE = [250, 250, 250];
const BLEND_DISTANCE = 384; // px de scroll da transição (igual ao WhoIAm)

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

const lerp = (from, to, t) => Math.round(from + (to - from) * t);

const mixColors = (from, to, t) =>
  `rgb(${from.map((channel, i) => lerp(channel, to[i], t)).join(", ")})`;

const getBlendProgress = (element) =>
  clamp(1 - element.getBoundingClientRect().bottom / BLEND_DISTANCE);

function Intro() {
  const sectionRef = useRef(null);
  const [blend, setBlend] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      setBlend(getBlendProgress(sectionRef.current));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Cinza → verde (fundo) e preto → branco (elementos inferiores)
  const backgroundColor = mixColors(GRAY, GREEN, blend);
  const textColor = mixColors(BLACK, WHITE, blend);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen overflow-hidden px-8 py-6"
      style={{
        backgroundColor,
      }}
    >
      {/* SOCIAL LINKS */}

      <div className="mt-16 ml-[8%]">
        <SocialLinks />
      </div>

      {/* TÍTULO */}

      <main className="flex flex-col pt-50 pl-[8%]">
        <h1 className="text-8xl font-semibold leading-[0.96] tracking-tight">
          Hello, I build the web.
          <br />
          Web Developer and Experience Creator
        </h1>
      </main>

      {/* PROFILE */}

      <div
        className="absolute bottom-27 left-[9%]"
        style={{
          color: textColor,
        }}
      >
        <Profile />
      </div>

      {/* INSTAGRAM */}

      <div className="absolute bottom-8 left-[3%]">
        <a
          href="https://www.instagram.com/joavitrsx/?__pwa=1"
          target="_blank"
          rel="noreferrer"
          className="group relative inline-block text-sm"
          style={{
            color: textColor,
          }}
        >
          @joavitrsx
          <span
            className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
            style={{
              backgroundColor: "currentColor",
            }}
          />
        </a>
      </div>

      {/* COFFEE */}

      <div className="absolute bottom-8 right-8">
        <p
          className="text-sm"
          style={{
            color: textColor,
          }}
        >
          A lot of coffee involved in this.
        </p>
      </div>
    </section>
  );
}

export default Intro;
