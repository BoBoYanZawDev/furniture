import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  opts: Intl.NumberFormatOptions = {},
) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: opts.currency ?? "USD",
    notation: opts.notation ?? "compact",
  }).format(Number(price));
}

export const parseIds = (rawValue: string | null): string[] => {
  if (!rawValue) return [];

  return decodeURIComponent(rawValue)
    .split(",")
    .map((dataId) => Number(dataId.trim()))
    .filter((dataId) => !isNaN(dataId))
    .map((dataId) => dataId.toString());
};
