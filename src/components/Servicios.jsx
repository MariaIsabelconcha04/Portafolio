const servicios = [
  { title: 'Desarrollo web', description: 'Creación de interfaces web utilizando tecnologías modernas de desarrollo frontend.' },
  { title: 'Interfaces', description: 'Construcción de interfaces organizadas, claras y adaptables a diferentes dispositivos.' },
  { title: 'Programación', description: 'Desarrollo de soluciones mediante lenguajes y herramientas trabajadas durante la formación.' },
  { title: 'Bases de datos', description: 'Trabajo con SQL y conceptos de gestión de información para aplicaciones.' },
]

function Servicios() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-slate-50 px-6 py-20">
      <article className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Servicios</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Áreas de trabajo</h2>
        </header>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {servicios.map((servicio) => (
            <li key={servicio.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{servicio.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{servicio.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}
export default Servicios
