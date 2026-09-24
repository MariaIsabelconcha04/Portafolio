function Proyectos() {
  return (
    <section id="proyectos" className="scroll-mt-24 bg-white px-6 py-20">
      <article className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Proyectos</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Trabajo realizado</h2>
        </header>
        <article className="mt-10 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300">Proyecto</p>
          <h3 className="mt-2 text-2xl font-bold">Coffee Vision — El ojo del caficultor</h3>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">Proyecto orientado a apoyar a los caficultores mediante información del cultivo, estadísticas, recomendaciones y herramientas de asistencia.</p>
          <p className="mt-6 text-sm text-slate-400">Tecnologías relacionadas: React, desarrollo web y gestión de información.</p>
        </article>
      </article>
    </section>
  )
}
export default Proyectos
