import { Fragment } from "react";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMariadb,
  SiJson,
} from "react-icons/si";
import { TbApi, TbDatabase } from "react-icons/tb";

const skills = [
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
  { name: "REST APIs", Icon: TbApi, color: "#FFFFFF" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MariaDB", Icon: SiMariadb, color: "#FFFFFF" },
  { name: "CRUD", Icon: TbDatabase, color: "#FFFFFF" },
  { name: "JSON", Icon: SiJson, color: "#FFFFFF" },
];

const toolGroups = [
  { label: "Código", items: ["Git", "GitHub", "Postman"] },
  {
    label: "Servidor",
    items: ["AWS EC2", "Linux / Ubuntu", "Apache", "Redis"],
  },
];

const infraGroups = [
  {
    label: "Redes",
    items: ["TCP/IP", "DNS", "DHCP", "VLANs", "Rotas virtuais", "MikroTik"],
  },
  { label: "Monitoramento", items: ["Zabbix", "Grafana", "The Dude"] },
  { label: "Provedor", items: ["OLT UNM 2000", "Smart OLT"] },
];

const SkillCard = ({ name, Icon, color }) => (
  <div className="group flex aspect-246/197 flex-col items-center justify-center gap-4 rounded-2xl bg-white p-3 transition-transform duration-400 ease-[ease] motion-safe:hover:scale-[0.97]">
    <span className="grid size-16 place-items-center rounded-full bg-zinc-900 transition-transform duration-400 ease-[ease] motion-safe:group-hover:scale-105 lg:size-20">
      <Icon className="size-1/2" style={{ color }} />
    </span>

    <span className="text-center text-base font-medium tracking-tight transition-transform duration-400 ease-[ease] motion-safe:group-hover:scale-[0.96] lg:text-xl">
      {name}
    </span>
  </div>
);

const SectionHeading = ({ title, description }) => (
  <div>
    <h2 className="text-2xl font-bold tracking-tighter text-[#376646] lg:text-4xl">
      {title}
    </h2>
    <p className="mt-2 max-w-[34ch] text-base text-zinc-500">{description}</p>
  </div>
);

const ItemList = ({ items }) => (
  <>
    {items.map((item, i) => (
      <Fragment key={item}>
        {i > 0 && <span className="mx-[0.45em] text-zinc-500">/</span>}
        {item}
      </Fragment>
    ))}
  </>
);

const SplitSection = ({ title, description, groups }) => (
  <section className="mt-24 grid gap-8 border-t border-zinc-300 pt-12 lg:mt-32 lg:grid-cols-[1fr_2fr]">
    <SectionHeading title={title} description={description} />

    <dl className="grid gap-5">
      {groups.map(({ label, items }) => (
        <div key={label}>
          <dt className="mb-1.5 text-xs uppercase tracking-[0.14em] text-zinc-500">
            {label}
          </dt>
          <dd className="text-xl leading-snug tracking-tight lg:text-2xl">
            <ItemList items={items} />
          </dd>
        </div>
      ))}
    </dl>
  </section>
);

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-neutral-200 px-[5.2%] py-24"
    >
      <div className="mx-auto max-w-[1700px]">
        <h1 className="mb-20 text-6xl font-semibold tracking-tighter lg:text-5xl">
          HOW I WORK
        </h1>

        {/* 01 — DEVELOPMENT */}
        <section>
          <SectionHeading
            title="01. Development"
            description="Interfaces, aplicações, APIs e bancos de dados."
          />

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </section>

        {/* 02 — TOOLS & CLOUD */}
        <SplitSection
          title="02. Tools & Cloud"
          description="Versionamento, testes e ambiente."
          groups={toolGroups}
        />

        {/* 03 — INFRASTRUCTURE */}
        <SplitSection
          title="03. Infrastructure"
          description="Redes, monitoramento e diagnóstico de incidentes."
          groups={infraGroups}
        />
      </div>
    </section>
  );
}

export default Skills;
