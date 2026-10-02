import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";
import Profile from "../components/Profile";

function Intro() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-[#e5e5e5] px-8 py-6"
    >
      <Navbar />

      <div className="mt-16 ml-[8%]">
        <SocialLinks />
      </div>

      <main className="flex flex-col pt-50 pl-[8%]">
        <h1 className="text-8xl font-semibold leading-[0.96] tracking-tight">
          Hello, I build the web.
          <br />
          Web Developer and Experience Creator
        </h1>
      </main>

      <div className="absolute bottom-27 left-[9%]">
        <Profile />
      </div>
      <div className="absolute bottom-8 left-[3%]">
        <a
          href="https://www.instagram.com/joavitrsx/?__pwa=1"
          target="_blank"
          rel="noreferrer"
          className="group relative inline-block text-sm"
        >
          @joavitrsx
          <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-black transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </a>
      </div>

      <div className="absolute bottom-8 right-8">
        <p className="text-sm">A lot of coffee involved in this.</p>
      </div>
    </section>
  );
}

export default Intro;
