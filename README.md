# 🚀 AI Chat SaaS (Streaming Chat Assistant)

A full-stack AI chat assistant with **real-time streaming responses (SSE)**, built using **HTML, CSS, JavaScript, and Node.js**.
This project demonstrates a production-ready architecture with a **frontend chat widget** and a **backend proxy server**.

---

## 🌐 Live Demo

* Frontend: https://your-app.vercel.app
* Backend API: https://your-backend.onrender.com

---

## 🧠 Features

* 💬 Floating chat widget UI
* ⚡ Real-time streaming responses (Server-Sent Events)
* 🔒 Backend proxy (no direct API exposure)
* 🧠 AI-ready architecture (plug Gemini/OpenAI easily)
* 🛑 AbortController for stream cleanup
* 📦 Lightweight (no heavy dependencies)
* 🚀 Easy deployment (Vercel + Render)

---

## 🏗️ Tech Stack

**Frontend**

* HTML
* CSS
* JavaScript (Vanilla)

**Backend**

* Node.js
* Express
* Server-Sent Events (SSE)

**Deployment**

* Vercel (Frontend)
* Render (Backend)

---

## 📁 Project Structure

```
ai-chat-saas/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   └── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/ai-chat-saas.git
cd ai-chat-saas
```

---

### 2️⃣ Run Backend

```
cd backend
npm install
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

### 3️⃣ Run Frontend

* Open `frontend/index.html` in browser
  OR
* Use Live Server extension

---

## 🔄 How It Works

1. User types a message in the chat widget
2. Frontend sends request to backend `/chat/stream`
3. Backend streams response using **SSE (Server-Sent Events)**
4. Frontend reads stream using `ReadableStream`
5. UI updates **token-by-token (real-time typing effect)**

---

## 📡 API Endpoint

### POST `/chat/stream`

**Request**

```json
{
  "messages": [
    { "role": "user", "content": "Hello" }
  ]
}
```

**Response**

* Streamed tokens via SSE

---

## 🚀 Deployment Guide

### 🔥 Backend (Render)

1. Push backend to GitHub
2. Go to Render
3. Create new Web Service
4. Set:

   * Build: `npm install`
   * Start: `node server.js`

---

### 🔥 Frontend (Vercel)

1. Push frontend to GitHub
2. Import project in Vercel
3. Deploy

---

## 🔧 Configuration

Update API URL in frontend:

```javascript
const API = "https://your-backend.onrender.com";
```

---

## 🧪 Future Improvements

* 🤖 Integrate Gemini / OpenAI API
* 🔐 Add authentication (Firebase Auth)
* 📊 Analytics dashboard
* 🏢 Multi-tenant SaaS support
* 💳 Stripe subscription billing
* 🧠 RAG (AI with custom data)

---

## 💼 Resume Description

> Built a full-stack AI chat assistant with real-time streaming responses using Server-Sent Events (SSE). Designed a secure backend proxy and deployed the system using Vercel and Render.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

MIT License

---

## ⭐ Support

If you like this project, please ⭐ the repo!
