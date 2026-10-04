import { useEffect, useRef, useState } from "react";

const GREEN = [55, 102, 70];
const GRAY = [229, 229, 229];
const BLEND_DISTANCE = 384; // px de scroll da transição (igual ao pb-96)

const me =
  "Meu nome é João Vitor e sou Desenvolvedor Full Stack, atualmente em transição da área de suporte técnico para o desenvolvimento de software. Sou apaixonado por tecnologia e por transformar ideias em soluções através da programação. Meu objetivo é construir experiências relevantes e me tornar uma referência na área de desenvolvimento.";
const hobbys =
  "Fora do código, gosto de jogar, ouvir música, e explorar novas tecnologias. Também curto descobrir coisas novas e passar horas aprendendo ou simplesmente fazendo algo que desperte minha curiosidade.";

const infoBlocks = [
  { label: "ME", text: me },
  { label: "HOBBY", text: hobbys },
];

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

const lerp = (from, to, t) => Math.round(from + (to - from) * t);

const mixColors = (from, to, t) =>
  `rgb(${from.map((channel, i) => lerp(channel, to[i], t)).join(", ")})`;

const getBlendProgress = (element) =>
  clamp(1 - element.getBoundingClientRect().bottom / BLEND_DISTANCE);

const BoxArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="size-5 text-[#f1dc5a]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
    <path d="M8 12h8m-3-3 3 3-3 3" />
  </svg>
);

const InfoBlock = ({ label, text }) => (
  <div className="mb-12">
    <h2 className="mb-3 text-xl font-semibold 2xl:text-2xl">
      <span aria-hidden="true" className="mr-2 text-white/50">
        ___
      </span>
      {label}
    </h2>

    <p className="max-w-2xl text-base leading-7 text-white/80 sm:text-lg 2xl:text-xl 2xl:leading-8">
      {text}
    </p>
  </div>
);

function WhoIAm() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [blend, setBlend] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const currentScrollY = window.scrollY;

      const scrollingDown = currentScrollY > lastScrollY.current;

      if (sectionTop < window.innerHeight * 0.8 && scrollingDown) {
        setIsVisible(true);
      }

      if (sectionTop > window.innerHeight * 0.2 && !scrollingDown) {
        setIsVisible(false);
      }

      setBlend(getBlendProgress(sectionRef.current));

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative min-h-screen overflow-x-clip px-6 pt-6 pb-32 text-[#FAFAFA] md:px-8 lg:pb-96"
      style={{ backgroundColor: mixColors(GREEN, GRAY, blend) }}
    >
      <div className="mx-auto flex max-w-8xl flex-col lg:min-h-screen lg:flex-row">
        {/* FOTO */}
        <div className="flex w-full items-center justify-center py-16 lg:w-[45%] lg:py-0">
          <div className="h-[60vh] w-[85%] overflow-hidden shadow-[15px_15px_40px_rgba(0,0,0,0.30),-15px_-15px_40px_rgba(255,255,255,0.06)] sm:w-[70%] md:w-[55%] lg:h-[70vh] lg:w-[67%] lg:shadow-[30px_30px_80px_rgba(0,0,0,0.30),-30px_-30px_80px_rgba(255,255,255,0.06)]">
            <img
              src="/images/joao.jpg"
              alt="João Vitor"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* CONTEÚDO */}
        <div
          className={`flex w-full items-start pt-4 transition-all duration-1400 ease-out lg:w-[52%] lg:pt-32 ${
            isVisible
              ? "translate-x-0 translate-y-0 opacity-100"
              : "translate-y-10 opacity-0 lg:translate-x-40 lg:translate-y-0"
          }`}
        >
          <div className="ml-auto w-full max-w-2xl">
            {infoBlocks.map((block) => (
              <InfoBlock key={block.label} {...block} />
            ))}

            {/* DESTAQUE */}
            <div className="mt-16 w-full py-4 lg:mt-24 lg:ml-[-30%] lg:w-[110%] lg:px-10 lg:py-8">
              <h2 className="mb-3 text-3xl font-semibold uppercase tracking-tight sm:text-4xl 2xl:text-5xl">
                João Vitor
              </h2>

              {/* <p className="max-w-xl text-xl leading-8 text-white/85 2xl:text-2xl 2xl:leading-9">
                Desenvolvedor Full Stack apaixonado por criar experiências para
                a web, transformar ideias em produtos e encontrar soluções
                simples para problemas complexos.
              </p> */}

              <a
                href="#sobre"
                className="mt-8 inline-flex items-center gap-3 text-base font-medium transition hover:opacity-70 sm:text-lg 2xl:text-xl"
              >
                About me
                <BoxArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoIAm;
