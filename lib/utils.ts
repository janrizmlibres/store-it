import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Whenever passing large payloads through server actions,
// it is recommended to stringify and then parse the value
export const parseStringify = (value: unknown) => {
  return JSON.parse(JSON.stringify(value));
};
