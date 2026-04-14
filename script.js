const API = "https://your-backend-url.onrender.com";

const btn = document.getElementById("chat-btn");
const box = document.getElementById("chat-box");
const input = document.getElementById("input");
const messagesDiv = document.getElementById("messages");

let controller;

// toggle
btn.onclick = () => box.classList.toggle("hidden");

function addMessage(text) {
  const div = document.createElement("div");
  div.textContent = text;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
  return div;
}

input.addEventListener("keypress", async (e) => {
  if (e.key === "Enter" && input.value.trim()) {
    const text = input.value;
    input.value = "";

    addMessage("You: " + text);

    controller?.abort();
    controller = new AbortController();

    const botDiv = addMessage("AI: ");

    const res = await fetch(`${API}/chat/stream`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [{ role: "user", content: text }] }),
      signal: controller.signal
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    let botText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split("\n");

      for (let line of lines) {
        if (line.startsWith("data: ")) {
          const data = line.replace("data: ", "");

          if (data === "[DONE]") return;

          const parsed = JSON.parse(data);
          botText += parsed.token;
          botDiv.textContent = "AI: " + botText;
        }
      }
    }
  }
});