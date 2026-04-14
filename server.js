import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 SSE Streaming endpoint
app.post("/chat/stream", async (req, res) => {
  const { messages } = req.body;

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const reply = "Hello 👋 I am your AI assistant. I can help with jobs, hiring, and platform usage.";

  try {
    for (let char of reply) {
      await new Promise(r => setTimeout(r, 25));
      res.write(`data: ${JSON.stringify({ token: char })}\n\n`);
    }

    res.write(`data: [DONE]\n\n`);
    res.end();
  } catch (err) {
    res.end();
  }
});

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.listen(5000, () => console.log("Server running on port 5000 - server.js:35"));