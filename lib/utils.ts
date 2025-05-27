import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = (url: string) =>
  fetch(API_BASE_URL + url).then(async res => {
    if (!res.ok) {
      const errorDetails = await res.text();
      throw new Error(`Error ${res.status}: ${errorDetails}`);
    }
    return res.json();
  });

export function addCommas(num: number): string {
  const str = num?.toString() || "";

  const reversed = str.split("").reverse();
  const result: string[] = [];

  reversed.map((char, index) => {
    result.push(char);
    if ((index + 1) % 3 === 0 && index + 1 !== reversed.length) {
      result.push(",");
    }
  });

  return result.reverse().join("");
}
