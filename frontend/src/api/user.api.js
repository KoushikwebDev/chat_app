import axiosInstance from "./axiosInstance";

export const getAllDemoChat = async () => {
  const response = await axiosInstance.get("/home/chats");
  return response.data;
};
