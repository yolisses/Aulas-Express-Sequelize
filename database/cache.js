import { createClient } from "redis";

export const cache = createClient();

cache.on("error", (err) => console.error("Redis Client Error", err));
