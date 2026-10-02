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

      <div className="mt-32">
        <h1 className="text-6xl font-black leading-tight">
          DESENVOLVEDOR
          <br />
          FULL STACK
        </h1>
      </div>

      <div className="mt-10">
        <SocialLinks />
      </div>

      <div className="absolute bottom-8 left-8">
        <Profile />
      </div>

      <div className="absolute bottom-8 right-8">
        <p className="text-sm">Construindo soluções para a web.</p>
      </div>
    </section>
  );
}

export default Intro;
