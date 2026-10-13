import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL, {
    retryStrategy: (times) => Math.min(times * 1000, 10000),
});

redis.on("connect", () => {
    console.log("Redis connected");
})

redis.on("error", (error) => {
    console.error(`Redis connection error: ${error.message}`);
});

export default redis;