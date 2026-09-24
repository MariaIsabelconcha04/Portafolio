function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Navegación principal">
        <a href="#inicio" className="font-bold tracking-tight text-slate-900">María Isabel</a>
        <ul className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <li><a className="transition hover:text-indigo-600" href="#sobre-mi">Sobre mí</a></li>
          <li><a className="transition hover:text-indigo-600" href="#habilidades">Habilidades</a></li>
          <li><a className="transition hover:text-indigo-600" href="#servicios">Servicios</a></li>
          <li><a className="transition hover:text-indigo-600" href="#proyectos">Proyectos</a></li>
          <li><a className="transition hover:text-indigo-600" href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
