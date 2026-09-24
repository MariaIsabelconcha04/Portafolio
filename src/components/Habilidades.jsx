const habilidades = ['HTML','CSS','JavaScript','Python','SQL','React','Vite','Tailwind CSS']

function Habilidades() {
  return (
    <section id="habilidades" className="scroll-mt-24 bg-white px-6 py-20">
      <article className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Habilidades</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Tecnologías y conocimientos</h2>
          <p className="mt-4 leading-7 text-slate-600">Tecnologías trabajadas durante mi formación en desarrollo de software.</p>
        </header>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {habilidades.map((habilidad) => (
            <li key={habilidad} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-semibold text-slate-800 shadow-sm">{habilidad}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}
export default Habilidades
