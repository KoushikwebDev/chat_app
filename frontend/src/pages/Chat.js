// eslint-disable-next-line no-unused-vars

import React from "react";
import { useQuery } from "react-query";
import { getAllDemoChat } from "../api/user.api";
import { baseUrlApi } from "../api/endPoints";
import FullPageLoader from "../components/FullPageLoader";

function Chat() {
  console.log(baseUrlApi);
  const { isLoading, refetch, data } = useQuery("chats", getAllDemoChat, {
    refetchOnWindowFocus: false,
  });
  console.log(data, "chat data");
  if (isLoading) {
    return <FullPageLoader />;
  }
  return <div>Chat</div>;
}

export default Chat;
