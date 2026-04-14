import { useState, useRef } from "react";

const API = import.meta.env.VITE_API_URL;

export default function App() {
  const [messages, setMessages] = useState([]);
  const controllerRef = useRef(null);

  const sendMessage = async (text) => {
    const updated = [...messages, { role: "user", content: text }];
    setMessages(updated);

    controllerRef.current?.abort();
    controllerRef.current = new AbortController();

    let botText = "";

    const res = await fetch(`${API}/chat/stream`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-tenant-id": "demo"
      },
      body: JSON.stringify({ messages: updated }),
      signal: controllerRef.current.signal
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      botText += chunk;

      setMessages((prev) => {
        const copy = [...prev];
        if (copy[copy.length - 1]?.role === "assistant") {
          copy[copy.length - 1].content = botText;
        } else {
          copy.push({ role: "assistant", content: botText });
        }
        return copy;
      });
    }
  };

  return (
    <div>
      <div>
        {messages.map((m, i) => (
          <div key={i}>{m.content}</div>
        ))}
      </div>

      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
}