const projects = [
  {
    title: "Netflix Clone",
    description:
      "Catálogo de filmes com login, planos de assinatura e pagamento.",
    status: "Em desenvolvimento",
    image: null,
  },
  {
    title: "Cloudflare API",
    description: "API REST otimizada para rodar na borda da Cloudflare.",
    status: "Em desenvolvimento",
    image: null,
  },
  {
    title: "Flappy Bird",
    description:
      "Clone do jogo em JavaScript puro, sem canvas nem bibliotecas.",
    status: "Em desenvolvimento",
    image: null,
  },
];

const mockBars = [
  "w-3/5 h-[18%] bg-neutral-900",
  "w-[85%] h-[12%] bg-neutral-400",
  "w-[45%] h-[12%] bg-neutral-400",
];

const MockPreview = () => (
  <div className="flex h-full flex-col justify-end gap-2.5 p-[8%]">
    {mockBars.map((bar) => (
      <i key={bar} className={`block rounded-full ${bar}`} />
    ))}
  </div>
);

const ProjectCard = ({ title, description, status, image }) => (
  <div className="group block rounded-3xl bg-white p-3 sm:rounded-[28px] sm:p-4 md:even:mt-24">
    <div className="aspect-16/10 overflow-hidden rounded-2xl bg-neutral-300 duration-300 sm:rounded-[18px] group-hover:scale-[0.97]">
      {image ? (
        <img src={image} alt={title} className="size-full object-cover" />
      ) : (
        <MockPreview />
      )}
    </div>

    <div className="flex items-start justify-between gap-4 px-1 pb-2 pt-5 sm:px-2">
      <div>
        <h3 className="text-2xl font-bold leading-none tracking-tighter sm:text-3xl">
          {title}
        </h3>

        <p className="mt-2 max-w-[34ch] text-sm text-neutral-500 sm:text-[0.95rem]">
          {description}
        </p>

        <span className="mt-4 inline-block text-[10px] font-medium uppercase tracking-[0.2em] text-[#376646] sm:text-xs">
          {status}
        </span>
      </div>
    </div>
  </div>
);

function WhatIBuild() {
  return (
    <section
      id="projetos"
      className="min-h-screen bg-neutral-200 px-6 py-20 sm:px-8 sm:py-24"
    >
      <h2 className="mb-16 ml-0 text-4xl font-semibold tracking-tighter sm:mb-25 sm:ml-[6%] sm:text-5xl">
        WHAT I BUILD
      </h2>

      <div className="mx-auto grid max-w-[1700px] grid-cols-1 items-start gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default WhatIBuild;
