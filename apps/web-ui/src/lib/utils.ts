import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function assert(condition: boolean, errorMsg: string): asserts condition {
  if (!condition) throw new Error(`Assertion failed: ${errorMsg}`)
}
