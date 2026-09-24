function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-24 bg-slate-950 text-white">
      <article id="inicio" className="mx-auto grid min-h-[78vh] max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[1.4fr_0.6fr]">
        <section>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-300">Portafolio personal</p>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">María Isabel Concha Solarte</h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">Estudiante de Análisis y desarrollo de software.</p>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">Me caracterizo por ser responsable, colaboradora, puntual y orientada al trabajo en equipo.</p>
          <p className="mt-8">
            <a href="#contacto" className="inline-flex rounded-full bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400">Conocer más</a>
          </p>
        </section>
        <aside className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300">Perfil</p>
          <p className="mt-4 text-2xl font-bold">Aprendizaje, colaboración y desarrollo</p>
          <p className="mt-4 leading-7 text-slate-400">Un espacio para presentar conocimientos y proyectos relacionados con el desarrollo de software.</p>
        </aside>
      </article>
    </section>
  )
}
export default About
