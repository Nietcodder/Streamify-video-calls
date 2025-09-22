// import { StreamChat } from "stream-chat";
// import "dotenv/config";

// const apiKey = process.env.STREAM_API_KEY;
// const apiSecret = process.env.STREAM_API_SECRET;

// if (!apiKey || !apiSecret) {
//   console.error("Stream API key or Secret is missing");
// }

// const streamClient = StreamChat.getInstance(apiKey, apiSecret);

// export const upsertStreamUser = async (userData) => {
//   try {
//     await streamClient.upsertUsers([userData]);
//     console.log("Stream user upserted:", userData.id);
//     return userData;
//   } 
  
  
//   catch (error) {
//     console.error("Error upserting Stream user:", error);
//   }
// };

// export const generateStreamToken = (userId) => {
//   try {
//     // ensure userId is a string
//     const userIdStr = userId.toString();
//     return streamClient.createToken(userIdStr);
//   } catch (error) {
//     console.error("Error generating Stream token:", error);
//   }
// };

// export { streamClient };
// import { StreamChat } from "stream-chat";
// import "dotenv/config";

// const apiKey = process.env.STREAM_API_KEY;
// const apiSecret = process.env.STREAM_API_SECRET;

// if (!apiKey || !apiSecret) {
//   console.error("Stream API key or Secret is missing");
// }

// const streamClient = StreamChat.getInstance(apiKey, apiSecret);

// export const upsertStreamUser = async (userData) => {
//   try {
//     await streamClient.upsertUsers([userData]);
//     console.log("Stream user upserted:", userData.id);
//     return userData;
//   } catch (error) {
//     console.error("Error upserting Stream user:", error.response || error);
//   }
// };

// export const generateStreamToken = (userId) => {
//   try {
//     const userIdStr = userId.toString();
//     return streamClient.createToken(userIdStr);
//   } catch (error) {
//     console.error("Error generating Stream token:", error);
//   }
// };

// export { streamClient };

// // ✅ Add a test call (this was missing in your code)
// (async () => {
//   await upsertStreamUser({ id: "nishant123", name: "Nishant" });
// })();
import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Stream API key or Secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUser(userData);
    return userData;
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};

export const generateStreamToken = (userId) => {
  try {
    // ensure userId is a string
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
};