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
  <div className="group block rounded-[28px] bg-white p-4 md:even:mt-24">
    {/* PREVIEW */}
    <div className="aspect-16/10 overflow-hidden rounded-[18px] bg-neutral-300 duration-300 group-hover:scale-[0.97]">
      {image ? (
        <img src={image} alt={title} className="size-full object-cover" />
      ) : (
        <MockPreview />
      )}
    </div>

    {/* INFORMAÇÕES */}
    <div className="flex items-end justify-between gap-4 px-2 pb-2 pt-5">
      <div>
        <h3 className="text-3xl font-bold leading-none tracking-tighter">
          {title}
        </h3>

        <p className="mt-2 max-w-[34ch] text-[0.95rem] text-neutral-500">
          {description}
        </p>

        {/* STATUS */}
        <span className="mt-4 inline-block text-xs font-medium uppercase tracking-widest text-[#376646]">
          {status}
        </span>
      </div>
    </div>
  </div>
);

function WhatIBuild() {
  return (
    <section id="projetos" className="min-h-screen bg-neutral-200 px-8 py-24">
      <h2 className="mb-25 ml-[6%] text-5xl font-semibold tracking-tighter">
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
