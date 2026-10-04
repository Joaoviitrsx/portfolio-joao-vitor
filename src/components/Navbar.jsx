import { useState } from "react";

function Navbar({ isWhite = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const textColor = isWhite ? "text-white" : "text-black";

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={textColor}>
      {/* DESKTOP */}
      <div className="hidden items-center justify-end gap-8 md:flex">
        <a href="#inicio" className="group relative text-sm">
          INTRO
          <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-current transition-transform duration-500 group-hover:scale-x-100" />
        </a>

        <a href="#sobre" className="group relative text-sm">
          WHO I AM
          <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-current transition-transform duration-500 group-hover:scale-x-100" />
        </a>

        <a href="#projetos" className="group relative text-sm">
          WHAT I BUILD
          <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-current transition-transform duration-500 group-hover:scale-x-100" />
        </a>

        <a href="#skills" className="group relative text-sm">
          HOW I WORK
          <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-current transition-transform duration-500 group-hover:scale-x-100" />
        </a>

        <a href="#contatos" className="group relative text-sm">
          CONTACT
          <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-current transition-transform duration-500 group-hover:scale-x-100" />
        </a>
      </div>

      {/* MOBILE */}
      <div className="flex justify-end md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex size-11 flex-col items-center justify-center gap-1.5"
          aria-label="Abrir menu"
        >
          <span
            className={`h-px w-6 bg-current transition-transform ${
              isOpen ? "translate-y-1 rotate-45" : ""
            }`}
          />

          <span
            className={`h-px w-6 bg-current transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`h-px w-6 bg-current transition-transform ${
              isOpen ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="absolute right-6 top-20 flex min-w-50 flex-col gap-5 bg-neutral-900 p-6 text-white shadow-xl md:hidden">
          <a href="#inicio" onClick={closeMenu} className="text-sm">
            INTRO
          </a>

          <a href="#sobre" onClick={closeMenu} className="text-sm">
            WHO I AM
          </a>

          <a href="#projetos" onClick={closeMenu} className="text-sm">
            WHAT I BUILD
          </a>

          <a href="#skills" onClick={closeMenu} className="text-sm">
            HOW I WORK
          </a>

          <a href="#contatos" onClick={closeMenu} className="text-sm">
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
