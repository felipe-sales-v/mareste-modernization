import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Menu, Radio, Satellite, Ship, Wrench, X } from "lucide-react";
import { useState } from "react";

import vesselImage from "../assets/mareste-vessel-dusk.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mareste | Telecomunicação via satélite" },
      {
        name: "description",
        content:
          "Soluções de telecomunicação via satélite, equipamentos navais e suporte técnico para operações marítimas críticas.",
      },
      { property: "og:title", content: "Mareste | Telecomunicação via satélite" },
      {
        property: "og:description",
        content:
          "Conectividade, equipamentos e suporte especializado para embarcações e operações críticas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const solutions = [
  {
    number: "01",
    icon: Satellite,
    title: "Telecomunicações",
    description:
      "Links corporativos para dados, voz e vídeo, com fornecimento de internet via satélite, radioenlace e IoT.",
  },
  {
    number: "02",
    icon: Ship,
    title: "Equipamentos navais",
    description:
      "Antenas, sistemas de monitoramento, CFTV e equipamentos de TI preparados para ambientes marítimos.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Serviços especializados",
    description:
      "Projetos, surveys, instalação, comissionamento e manutenção de antenas estabilizadas, modems e RF.",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell min-h-screen overflow-hidden bg-background text-foreground">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <div className="relative z-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Mareste, início">
            <span className="grid size-10 place-items-center rounded-xl border border-primary/35 bg-primary/10 text-primary">
              <Radio size={21} aria-hidden="true" />
            </span>
            <span>
              <strong className="block font-display text-xl font-bold text-foam">mareste</strong>
              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.12em] text-haze/55 sm:block">
                telecomunicação via satélite
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-haze/70 md:flex" aria-label="Navegação principal">
            <a className="transition-colors hover:text-foam" href="#solucoes">Soluções</a>
            <a className="transition-colors hover:text-foam" href="#equipamentos">Equipamentos</a>
            <a className="transition-colors hover:text-foam" href="#servicos">Serviços</a>
            <a className="transition-colors hover:text-foam" href="#sobre">Quem somos</a>
          </nav>

          <a className="button-primary hidden sm:inline-flex" href="#contato">
            Fale com um especialista
          </a>
          <button
            className="grid size-10 place-items-center rounded-xl border border-glass-border bg-glass text-foam md:hidden"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </header>

        {menuOpen && (
          <nav className="mx-5 grid gap-1 rounded-2xl border border-glass-border bg-deep/95 p-3 text-sm font-semibold text-haze shadow-glass md:hidden">
            {[["Soluções", "#solucoes"], ["Equipamentos", "#equipamentos"], ["Serviços", "#servicos"], ["Quem somos", "#sobre"], ["Contato", "#contato"]].map(([label, href]) => (
              <a key={href} href={href} className="rounded-xl px-4 py-3 hover:bg-glass" onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>
        )}

        <main id="inicio">
          <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-12 lg:px-10 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                <span className="signal-dot size-2 rounded-full bg-primary" />
                Conectividade para operações críticas
              </div>
              <h1 className="max-w-[12ch] font-display text-5xl font-bold leading-[1.04] text-foam sm:text-6xl lg:text-7xl">
                Sinal firme, mesmo longe da costa.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-haze/75 sm:text-lg">
                A Mareste integra telecomunicação via satélite, equipamentos robustos e suporte especializado para embarcações, plataformas e aplicações críticas.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a className="button-primary" href="#contato">Solicitar proposta <ArrowRight size={17} /></a>
                <a className="button-secondary" href="#equipamentos">Ver equipamentos</a>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 border-t border-glass-border pt-6 sm:grid-cols-3">
                <div><strong className="block font-display text-lg text-primary">Ponta a ponta</strong><span className="text-xs text-haze/60">Projeto à manutenção</span></div>
                <div><strong className="block font-display text-lg text-primary">Alto-mar</strong><span className="text-xs text-haze/60">Cobertura especializada</span></div>
                <div><strong className="block font-display text-lg text-primary">Multissistema</strong><span className="text-xs text-haze/60">Satélite, rádio e IoT</span></div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-glass-border bg-glass p-2 shadow-glass backdrop-blur-2xl">
                <img
                  src={vesselImage}
                  alt="Embarcação offshore equipada com antena de comunicação via satélite"
                  width={912}
                  height={1104}
                  fetchPriority="high"
                  className="aspect-[9/11] w-full rounded-[1.25rem] object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-glass-border bg-abyss/70 px-4 py-3 backdrop-blur-xl">
                  <div><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">Operação conectada</p><p className="mt-1 text-sm font-semibold text-foam">Marítima · Offshore · Crítica</p></div>
                  <Radio className="text-primary" size={22} aria-hidden="true" />
                </div>
              </div>
            </div>
          </section>

          <section id="solucoes" className="mx-auto max-w-7xl scroll-mt-8 px-5 pb-20 lg:px-10">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div><p className="eyebrow">Soluções integradas</p><h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-foam sm:text-4xl">Tecnologia para manter sua operação sempre em alcance.</h2></div>
              <p className="max-w-md text-sm leading-relaxed text-haze/60">Uma equipe, vários sistemas e atendimento especializado para ambientes que exigem continuidade.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {solutions.map(({ number, icon: Icon, title, description }, index) => (
                <article key={title} id={index === 1 ? "equipamentos" : index === 2 ? "servicos" : undefined} className="glass-card scroll-mt-8">
                  <div className="mb-6 flex items-center justify-between"><span className="grid size-11 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary"><Icon size={21} aria-hidden="true" /></span><span className="font-display text-sm font-semibold text-primary/70">{number}</span></div>
                  <h3 className="font-display text-xl font-semibold text-foam">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-haze/65">{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="sobre" className="mx-auto max-w-7xl scroll-mt-8 px-5 pb-20 lg:px-10">
            <div className="overflow-hidden rounded-3xl border border-glass-border bg-glass backdrop-blur-2xl">
              <div className="grid lg:grid-cols-5">
                <div className="border-b border-glass-border p-7 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-10">
                  <p className="eyebrow">Experiência em campo</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold text-foam">Especialistas em comunicação para áreas marítimas e aplicações críticas.</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-haze/65">Oferecemos soluções adequadas a embarcações de diferentes portes, de iates a navios e plataformas, com atendimento rápido aos nossos clientes.</p>
                </div>
                <div className="grid grid-cols-2 lg:col-span-2">
                  <div className="border-r border-glass-border p-7 lg:p-10"><strong className="font-display text-3xl text-primary">Brasil</strong><p className="mt-2 text-sm text-haze/60">Base técnica e atendimento próximo</p></div>
                  <div className="p-7 lg:p-10"><strong className="font-display text-3xl text-primary">Global</strong><p className="mt-2 text-sm text-haze/60">Soluções para rotas internacionais</p></div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer id="contato" className="mx-auto max-w-7xl scroll-mt-8 px-5 pb-10 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-7 rounded-3xl border border-glass-border bg-glass px-7 py-9 backdrop-blur-2xl md:flex-row md:items-center lg:px-10">
            <div><p className="eyebrow">Pronto para conectar?</p><h2 className="mt-3 font-display text-2xl font-semibold text-foam">Leve sua operação para além do horizonte.</h2><p className="mt-2 text-sm text-haze/60">Converse com a equipe Mareste sobre sua rota e necessidade.</p></div>
            <a className="button-primary shrink-0" href="mailto:info@mareste.com.br">Enviar mensagem <ArrowRight size={17} /></a>
          </div>
          <div className="flex flex-col gap-2 px-2 py-7 text-xs text-haze/45 sm:flex-row sm:items-center sm:justify-between"><span>© Mareste Equipamentos e Serviços de Telecom</span><a className="hover:text-foam" href="mailto:info@mareste.com.br">info@mareste.com.br</a></div>
        </footer>
      </div>
    </div>
  );
}