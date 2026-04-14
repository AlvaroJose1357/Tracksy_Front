import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Outlet } from "react-router-dom"


const AuthLayout = () => {
  return (
    <div className="flex min-h-dvh flex-col bg-slate-950 text-slate-100">
      <Header />
      <main className="flex min-h-0 flex-1 flex-col justify-center overflow-y-auto py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout