const EMAIL = "joaovitor079mm@gmail.com";

function Contact() {
  return (
    <section
      id="contatos"
      className="relative flex min-h-screen flex-col overflow-hidden bg-neutral-200 px-6 py-6 sm:px-8"
    >
      <main className="flex flex-1 items-center justify-center pb-[8vh] text-center">
        <h1 className="max-w-250 text-5xl font-semibold leading-[0.96] tracking-tight sm:text-6xl md:text-8xl">
          Let's build something.
          <br />
          Say hello and let's talk.
        </h1>
      </main>

      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-[3%]">
        <p className="text-sm text-neutral-500 sm:text-base">Contact</p>

        <a
          href={`mailto:${EMAIL}`}
          className="group relative mt-1 inline-block max-w-[calc(100vw-3rem)] break-all text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl"
        >
          {EMAIL}

          <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-current transition-transform duration-500 group-hover:scale-x-100" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
