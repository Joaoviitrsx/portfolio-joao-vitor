const EMAIL = "joaovitor079mm@gmail.com";

function Contact() {
  return (
    <section
      id="contatos"
      className="relative flex min-h-screen flex-col overflow-hidden bg-neutral-200 px-8 py-6"
    >
      {/* TÍTULO */}

      <main className="flex flex-1 items-center justify-center pb-[6vh] text-center">
        <h1 className="text-8xl font-semibold leading-[0.96] tracking-tight">
          Let's build something
          <br />
          Say hello and let's talk
        </h1>
      </main>

      {/* E-MAIL */}

      <div className="absolute bottom-8 left-[3%]">
        <p className="text-base text-neutral-500">Contact</p>

        <a
          href={`mailto:${EMAIL}`}
          className="group relative mt-1 inline-block text-2xl font-semibold tracking-tight"
        >
          {EMAIL}

          <span
            className="
              absolute
              -bottom-1
              left-0
              h-px
              w-full
              origin-center
              scale-x-0
              bg-current
              transition-transform
              duration-500
              ease-out
              group-hover:scale-x-100
            "
          />
        </a>
      </div>
    </section>
  );
}

export default Contact;
