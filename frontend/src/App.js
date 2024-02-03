// eslint-disable-next-line no-unused-vars

import { Button } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import useNotiStack from "./hooks/useNotiStack";

function App() {
  const { toastSuccess, toastError } = useNotiStack();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
