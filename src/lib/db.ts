import { Redis } from "@upstash/redis";

export const db: Redis = Redis.fromEnv();
