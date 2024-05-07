import redis, { RedisClientType } from "redis";

export const auditLogs = async function (
  client: RedisClientType,
  subscriber: RedisClientType,
  messageHandlers: Record<string, Function>
): Promise<any> {
  try {
    Promise.all([subscriber.connect(), client.connect()]);

    await subscriber.subscribe(
      Object.keys(messageHandlers), // Mengambil semua jenis pesan yang dikelola
      async (message: string, channel: string) => {
        const handler = messageHandlers[channel];
        if (handler) {
          await handler(message, client);
        } else {
          console.log(`No handler found for channel ${channel}`);
        }
      }
    );
  } catch (error) {
    console.log("Error:", error);
  }
};

export const publisher = (event: string, message: {}) => {
  const client: RedisClientType = redis.createClient();
  client.publish(event, JSON.stringify(message));
};
