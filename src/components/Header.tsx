import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/50">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <span className="text-lg font-semibold tracking-tight">Tracksy</span>
          <nav className="flex items-center gap-3 text-sm">
            <Link
              to="/auth/login"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Iniciar sesión
            </Link>
            <Link
              to="/auth/register"
              className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition-colors hover:bg-indigo-500"
            >
              Crear cuenta
            </Link>
          </nav>
        </div>
      </header>
  )
}

export default Header