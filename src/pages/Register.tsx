import { Link, useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";
import Error from "@/components/Error";
import type { RegisterForm } from "@/types/user";
import { registerAccount } from "@/services/User";
import { getApiErrorMessage } from "@/utils/getApiErrorMessage";

const inputClassName =
  "rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500";

export default function Register() {
  const navigate = useNavigate();

  const initialValues: RegisterForm = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({ defaultValues: initialValues });

  const watchPassword = useWatch({ control, name: "password" });
  const onSubmit = async (formData: RegisterForm) => {
    try {
      await registerAccount(formData);
      toast.success("Cuenta creada correctamente");
      navigate("/auth/login");
      reset();
    } catch (error) {
      toast.error(getApiErrorMessage(error));
    }
  };

  return (
    <div className="mx-auto w-full max-w-md px-4">
      <Link to="/" className="mb-8 text-sm text-slate-500 hover:text-slate-300">
        ← Volver al inicio
      </Link>
      <h1 className="text-2xl font-semibold tracking-tight">Crear cuenta</h1>
      <p className="mt-1 text-sm text-slate-500">
        Crea tu cuenta. Aquí conectarás tu proveedor de autenticación.
      </p>
      <form
        className="mt-8 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm text-slate-400">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Tu nombre"
            className={inputClassName}
            {...register("name", { required: "El nombre es obligatorio" })}
          />
          {errors.name && <Error>{errors.name.message?.toString()}</Error>}
        </div>

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
          {errors.email && <Error>{errors.email.message?.toString()}</Error>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="text-sm text-slate-400">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
            className={inputClassName}
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres",
              },
            })}
          />
          {errors.password && (
            <Error>{errors.password.message?.toString()}</Error>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="password_confirmation"
            className="text-sm text-slate-400"
          >
            Repetir contraseña
          </label>
          <input
            id="password_confirmation"
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
            className={inputClassName}
            {...register("password_confirmation", {
              required: "La confirmación es obligatoria",
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres",
              },
              validate: (value) =>
                value === watchPassword || "Las contraseñas no coinciden",
            })}
          />
          {errors.password_confirmation && (
            <Error>{errors.password_confirmation.message?.toString()}</Error>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 rounded-lg bg-indigo-600 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Registrando…" : "Registrarse"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-500">
        ¿Ya tienes cuenta?{" "}
        <Link
          to="/auth/login"
          className="text-indigo-400 hover:text-indigo-300"
        >
          Iniciar sesión
        </Link>
      </p>
    </div>
  );
}
