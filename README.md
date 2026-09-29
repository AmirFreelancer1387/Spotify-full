# 🎧 Spotify — Full-Stack Music Platform

<div align="center">

### 🎵 A modern Spotify-inspired music streaming platform

**React • TypeScript • Tailwind CSS • Node.js • Express • Microservices**

<br>







\

</div>

---

## ✨ About

A **full-stack Spotify-inspired application** built as a team project with a modern, scalable architecture.

🎧 Music streaming
🔎 Smart search
❤️ Likes & library
📚 Playlists
👤 Authentication
🎤 Artists & albums
⚡ Redis caching
🧩 Microservices architecture
📱 Responsive UI

---

## 🛠️ Tech Stack

### 🎨 Frontend

* ⚛️ React
* 🔷 TypeScript
* 🎨 Tailwind CSS
* ⚡ Vite
* 🧭 React Router
* 🔄 React Query
* 🗃️ Zustand

### ⚙️ Backend

* 🟢 Node.js
* 🚂 Express.js
* 🔷 TypeScript
* 🔐 JWT
* 🛡️ Zod
* 🔒 bcrypt

### 🗄️ Infrastructure

* 🍃 MongoDB
* ⚡ Redis
* 🐳 Docker
* 🌐 Nginx
* 🔄 GitHub Actions

---

## 🏗️ Architecture

```text
              🎨 React + TypeScript
                       │
                       ▼
                🌐 API Gateway
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
   🔐 Auth        🎵 Music        👤 User
   Service        Service        Service
        │              │              │
        └──────────────┼──────────────┘
                       ▼
                 🗄️ MongoDB
                       │
                    ⚡ Redis
```

---

## 📂 Project Structure

```text
spotify-fullstack/
│
├── 🎨 frontend/
│
├── ⚙️ services/
│   ├── 🔐 auth-service/
│   ├── 👤 user-service/
│   ├── 🎵 music-service/
│   ├── 📚 playlist-service/
│   ├── 🔎 search-service/
│   └── 🌐 api-gateway/
│
├── 🐳 infrastructure/
├── 📚 docs/
└── 📄 README.md
```

---

## 🚀 Quick Start

### 1️⃣ Clone

```bash
git clone https://github.com/AmirFreelancer1387/spotify-fullstack.git
cd spotify-fullstack
```

### 2️⃣ Install

```bash
npm install
```

### 3️⃣ Environment

Create your `.env` files based on the service configuration.

```env
NODE_ENV=development
PORT=5000

MONGODB_URI=mongodb://localhost:27017/spotify
REDIS_URL=redis://localhost:6379

JWT_ACCESS_SECRET=your_secret
JWT_REFRESH_SECRET=your_refresh_secret
```

### 4️⃣ Run with Docker 🐳

```bash
docker compose up -d
```

### 5️⃣ Run Development Server

```bash
npm run dev
```

🎉 Open:

```text
http://localhost:5173
```

---

## 🔐 Security

🔒 JWT Authentication
🔑 Password Hashing
🛡️ Request Validation
🚦 Rate Limiting
🌐 CORS Protection
🔐 Environment Secrets

---

## 👥 Team Workflow

```text
main
 │
 └── develop
      │
      ├── feature/auth
      ├── feature/player
      ├── feature/playlists
      └── feature/search
```

We use **Feature Branches + Pull Requests + Conventional Commits**.

```text
feat: add music player
fix: resolve auth issue
refactor: improve music service
docs: update README
```

---

## 🗺️ Roadmap

* [x] 🎨 Modern UI
* [x] 🔐 Authentication
* [x] 🎵 Music Player
* [x] 📚 Playlists
* [x] 🔎 Search
* [x] 🧩 Microservices
* [x] ⚡ Redis
* [x] 🐳 Docker
* [ ] 🤖 Recommendation System
* [ ] 📊 Listening Statistics
* [ ] 🚀 Production Deployment

---

<div align="center">

### 🎧 Built with code, music & teamwork.

**⭐ Star the repository if you like it!**

</div>

> ⚠️ This project is an independent educational project and is not affiliated with or endorsed by Spotify.
