export const auditLogs = async function (
  client: any,
  subscriber: any,
  messageHandlers: any
): Promise<any> {
  try {
    Promise.all([subscriber.connect(), client.connect()]);

    await subscriber.subscribe(
      Object.keys(messageHandlers), // Mengambil semua jenis pesan yang dikelola
      async (message: any, channel: any) => {
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
