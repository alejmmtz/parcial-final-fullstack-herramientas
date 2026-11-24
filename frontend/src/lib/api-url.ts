import "server-only";

export const apiUrl = (process.env.TOOL_API_URL ?? "http://127.0.0.1:3050/api").replace(/\/+$/, "");

export const picsumUrl = ("https://picsum.photos/800/400");
