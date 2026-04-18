// utils/fetchAPI.js
import { parseAPIResponse } from "./parser";
import {navLinks} from "./data";
// When API is ready, change this to the real URL
// const BASE_URL = "https://real-api.com/api";

export async function fetchAPI(endpoint) {
  const BASE_URL = typeof window === 'undefined' ? "http://localhost:3000/data" : "/data";
  const url = `${BASE_URL}/${endpoint}`;

  try {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${endpoint}`);
    }

    const text = await res.text();
    return parseAPIResponse(text);

  } catch (error) {
    console.warn(`fetchAPI failed for ${url}:`, error.message);

    if (endpoint === "navLinks") {
      return navLinks;
    }
    throw error;
  }
}