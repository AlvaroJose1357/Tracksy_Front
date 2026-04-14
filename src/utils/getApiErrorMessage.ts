import { isAxiosError } from "axios";

/** Extrae mensaje legible de respuestas FastAPI (`detail`) u otras (`error`). */
export function getApiErrorMessage(error: unknown): string {
  if (!isAxiosError(error)) {
    return error instanceof Error ? error.message : "Error inesperado";
  }
  const data = error.response?.data;
  if (data && typeof data === "object") {
    if ("error" in data && typeof (data as { error: unknown }).error === "string") {
      return (data as { error: string }).error;
    }
    const detail = (data as { detail?: unknown }).detail;
    if (typeof detail === "string") return detail;
    if (Array.isArray(detail) && detail[0] && typeof detail[0] === "object") {
      const first = detail[0] as { msg?: string };
      if (typeof first.msg === "string") return first.msg;
    }
  }
  return error.message || "Error de red";
}
