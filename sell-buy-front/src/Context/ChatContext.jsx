import { createContext, useState } from "react";

const ChatContext = createContext();

export function ChatContextProvider({ children }) {
  const [chat, setChat] = useState(null);

  return (
    <ChatContext.Provider value={{ chat, setChat }}>
      {children}
    </ChatContext.Provider>
  );
}
