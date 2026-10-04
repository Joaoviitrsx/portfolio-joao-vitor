import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiMariadb,
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    Icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "HTML5",
    Icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "React",
    Icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    color: "#5FA04E",
  },
  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "MariaDB",
    Icon: SiMariadb,
    color: "#003545",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-neutral-200 px-6 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-[1700px]">
        {/* TÍTULO */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-5xl font-semibold uppercase tracking-tight sm:text-5xl">
            How I Work
          </h1>
        </div>

        {/* DEVELOPMENT */}
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#376646] sm:text-3xl">
              01. Development
            </h2>

            <p className="mt-2 max-w-2xl text-sm text-zinc-500 sm:text-base">
              Desenvolvimento de interfaces, aplicações, APIs e bancos de dados.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8">
            {skills.map(({ name, Icon, color }) => (
              <div
                key={name}
                className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl bg-white p-4 transition-transform duration-300 hover:-translate-y-1 sm:gap-4 sm:p-6"
              >
                <div className="grid size-12 place-items-center rounded-full bg-zinc-900 transition-transform duration-300 group-hover:scale-105 sm:size-16">
                  <Icon className="size-6 sm:size-8" style={{ color }} />
                </div>

                <span className="text-center text-xs font-medium sm:text-sm">
                  {name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Express.js", "REST APIs", "CRUD", "JSON"].map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-3 py-2 text-xs sm:px-4 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* TOOLS & CLOUD */}
        <div className="mt-16 border-t border-zinc-300 pt-10 sm:mt-16 sm:pt-12">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#376646] sm:text-3xl">
              02. Tools & Cloud
            </h2>

            <p className="mt-2 text-sm text-zinc-500 sm:text-base">
              Ferramentas, versionamento, sistemas e infraestrutura de ambiente.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Git",
              "GitHub",
              "Postman",
              "AWS EC2",
              "Linux / Ubuntu",
              "Apache",
              "Redis",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-4 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* INFRASTRUCTURE */}
        <div className="mt-16 border-t border-zinc-300 pt-10 sm:pt-12">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#376646] sm:text-3xl">
              03. Infrastructure
            </h2>

            <p className="mt-2 text-sm text-zinc-500 sm:text-base">
              Redes, monitoramento, infraestrutura e diagnóstico de incidentes.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "TCP/IP",
              "DNS",
              "DHCP",
              "VLANs",
              "Rotas Virtuais",
              "MikroTik",
              "Zabbix",
              "Grafana",
              "The Dude",
              "OLT UNM 2000",
              "Smart OLT",
              "Monitoramento de Redes",
              "Diagnóstico e Resolução de Incidentes",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
