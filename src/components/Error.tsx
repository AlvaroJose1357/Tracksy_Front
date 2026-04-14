import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Error({ children }: Props) {
  return <p className="text-sm text-red-400">{children}</p>;
}
