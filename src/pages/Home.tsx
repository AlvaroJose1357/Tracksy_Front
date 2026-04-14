import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-slate-950 text-slate-100">
      <Header />
      <main className="flex min-h-0 flex-1 flex-col overflow-y-auto">
        <div className="mx-auto w-full max-w-5xl px-4 py-16">
          <p className="text-sm font-medium text-indigo-400">
            Gestión de inventario para equipos
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-semibold tracking-tight text-white">
            Organiza pedidos por tienda, sin mezclar datos entre negocios.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-400">
            Plataforma pensada para emprendimientos: varias personas por tienda,
            referencias de pedido y trazabilidad clara.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/auth/login"
              className="inline-flex rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
            >
              Iniciar sesión
            </Link>
            <Link
              to="/auth/register"
              className="inline-flex rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-600 hover:bg-slate-900"
            >
              Crear cuenta
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
