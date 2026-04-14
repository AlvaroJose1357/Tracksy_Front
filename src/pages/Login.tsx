import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Error from "@/components/Error";
import type { LoginForm } from "@/types/user";
import { login } from "@/services/User";
import { getApiErrorMessage } from "@/utils/getApiErrorMessage";

const inputClassName =
  "rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500";

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (formData: LoginForm) => {
    try {
      await login(formData);
      toast.success("Sesión iniciada");
      navigate("/");
    } catch (error) {
      toast.error(getApiErrorMessage(error));
    }
  };

  return (
    <div className="mx-auto w-full max-w-md px-4">
      <Link
        to="/"
        className="mb-8 text-sm text-slate-500 hover:text-slate-300"
      >
        ← Volver al inicio
      </Link>
      <h1 className="text-2xl font-semibold tracking-tight">Iniciar sesión</h1>
      <p className="mt-1 text-sm text-slate-500">
        Accede a tu cuenta. Aquí conectarás tu proveedor de autenticación.
      </p>
      <form
        className="mt-8 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm text-slate-400">
            Correo
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="tu@empresa.com"
            className={inputClassName}
            {...register("email", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "El correo no es válido",
              },
            })}
          />
          {errors.email && (
            <Error>{errors.email.message?.toString()}</Error>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="text-sm text-slate-400">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            className={inputClassName}
            {...register("password", {
              required: "La contraseña es obligatoria",
            })}
          />
          {errors.password && (
            <Error>{errors.password.message?.toString()}</Error>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 rounded-lg bg-indigo-600 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Entrando…" : "Entrar"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-500">
        ¿No tienes cuenta?{" "}
        <Link
          to="/auth/register"
          className="text-indigo-400 hover:text-indigo-300"
        >
          Registrarse
        </Link>
      </p>
    </div>
  );
}
