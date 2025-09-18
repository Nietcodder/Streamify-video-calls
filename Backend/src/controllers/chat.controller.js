// import express from "express";
// import { protectRoute } from "../middleware/auth.protectRoute.js";
// import { generateStreamToken } from "../lib/stream.js";
// export async function getStreamToken(req, res) {
//     try{
//         const token = generateStreamToken(req.user.id);
//         //we will generate a token and return it back to the client
//         //this token will be used to authenticate the user with the Stream API 
//         //we will make this token in lib stream.js
//         res.status(200).json({ success: true, token });
//     }catch(error){
//         console.error("Error in getStreamToken controller:", error.message);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// }
// import { StreamChat } from "stream-chat";
// import User from "../models/User.js";

// const apiKey = process.env.STREAM_API_KEY;
// const apiSecret = process.env.STREAM_API_SECRET;
// const serverClient = StreamChat.getInstance(apiKey, apiSecret);

// export const getStreamToken = async (req, res) => {
//   try {
//     const userId = req.user._id.toString();
//     const { targetUserId } = req.query;

//     if (!targetUserId) {
//       return res.status(400).json({ message: "targetUserId is required" });
//     }

//     // 1️⃣ Upsert logged-in user
//     await serverClient.upsertUser({
//       id: userId,
//       name: req.user.fullName,
//       image: req.user.profilePic || "",
//     });

//     // 2️⃣ Upsert target user from DB
//     const targetUser = await User.findById(targetUserId);
//     if (!targetUser) {
//       return res.status(404).json({ message: "Target user not found" });
//     }

//     await serverClient.upsertUser({
//       id: targetUser._id.toString(),
//       name: targetUser.fullName,
//       image: targetUser.profilePic || "",
//     });

//     // 3️⃣ Generate token for logged-in user
//     const token = serverClient.createToken(userId);

//     res.json({ success: true, token });
//   } catch (error) {
//     console.error("Stream token error:", error);
//     res.status(500).json({ message: "Failed to generate Stream token" });
//   }
// };
import { generateStreamToken } from "../lib/stream.js";
import { upsertStreamUser } from "../lib/stream.js";

export async function getStreamToken(req, res) {
  try {
     if (!req.user?.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const token = generateStreamToken(req.user.id);

    res.status(200).json({ token });
  } catch (error) {
    console.log("Error in getStreamToken controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}