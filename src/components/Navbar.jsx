function Navbar() {
  return (
    <nav className="flex items-center justify-end gap-8">
      <a href="#inicio" className="group relative text-sm">
        INTRO
        <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-black transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </a>

      <a href="#sobre" className="group relative text-sm">
        WHO I AM
        <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-black transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </a>

      <a href="#projetos" className="group relative text-sm">
        WHAT I BUILD
        <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-black transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </a>

      <a href="#skills" className="group relative text-sm">
        HOW I WORK
        <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-black transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </a>

      <a href="#contatos" className="group relative text-sm">
        CONTACT
        <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-black transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </a>
    </nav>
  );
}

export default Navbar;
