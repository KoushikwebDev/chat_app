import { asyncHandler } from "../lib/asyncHandler.js";
import { chats } from "../utils/dummyData.js";

export const home = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to chat app backend",
  });
});

export const chat = asyncHandler(async (req, res) => {
  res.status(200).json({
    data: chats,
    success: true,
    message: "Welcome to chat app backend",
  });
});
