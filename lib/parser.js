// utils/parser.js

export function parseAPIResponse(text) {
  try {
    // Try normal JSON first
    return JSON.parse(text);
  } catch {
    // Fallback: handle the weird "const navLinks = [...];" format
    const match = text.match(/=\s*(\[[\s\S]*?\]|\{[\s\S]*?\})\s*;/);
    if (!match) {
      console.error("Invalid API format:", text);
      throw new Error("Invalid API format");
    }
    return JSON.parse(match[1]);
  }
}