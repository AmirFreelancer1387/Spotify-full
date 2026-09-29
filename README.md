<div align="center">

# 🎧 SPOTIFY

### `The Ultimate Full-Stack Music Experience`

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=800&color=1DB954&center=true&vCenter=true&width=600&lines=Stream+%E2%80%A2+Discover+%E2%80%A2+Create+%E2%80%A2+Enjoy;Built+with+React+%2B+TypeScript+%2B+Node.js;Powered+by+Microservices+%26+Redis;Built+with+%E2%9D%A4%EF%B8%8F+by+our+team" alt="Typing SVG" />

<br>

[ 🎵 **Home** ](#-spotify--full-stack-music-platform) •
[ ✨ **Features** ](#-features) •
[ 🛠️ **Stack** ](#️-tech-stack) •
[ 🏗️ **Architecture** ](#️-architecture) •
[ 🚀 **Setup** ](#-quick-start) •
[ 👥 **Team** ](#-team-workflow)

<br>

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square\&logo=react\&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square\&logo=typescript\&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square\&logo=tailwindcss\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-24-339933?style=flat-square\&logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?style=flat-square\&logo=express\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-8-47A248?style=flat-square\&logo=mongodb\&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-7-DC382D?style=flat-square\&logo=redis\&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square\&logo=docker\&logoColor=white)

</div>

---

## 🎵 About

> A modern **Spotify-inspired full-stack music platform** built with a scalable **Microservices Architecture**.

Designed as a real-world team project combining a powerful backend with a modern, responsive frontend.

**Stream. Discover. Create. Repeat. 🎧**

---

## ✨ Features

| 🎧 Music        | 👤 Social        | ⚡ System         |
| --------------- | ---------------- | ---------------- |
| ▶️ Music Player | ❤️ Likes         | 🧩 Microservices |
| 🔎 Smart Search | 📚 Playlists     | ⚡ Redis Cache    |
| 🎤 Artists      | 👥 User Profiles | 🔐 JWT Auth      |
| 💿 Albums       | 🎵 Library       | 🐳 Docker        |
| 📈 History      | ⭐ Favorites      | 🛡️ Secure API   |

---

## 🛠️ Tech Stack

### 🎨 Frontend

```text
⚛️ React
🔷 TypeScript
🎨 Tailwind CSS
⚡ Vite
🧭 React Router
🔄 React Query
🗃️ Zustand
```

### ⚙️ Backend

```text
🟢 Node.js
🚂 Express.js
🔷 TypeScript
🔐 JWT
🛡️ Zod
🔒 bcrypt
```

### 🗄️ Infrastructure

```text
🍃 MongoDB
⚡ Redis
🐳 Docker
🌐 Nginx
🔄 GitHub Actions
```

---

## 🏗️ Architecture

```text
                         🎨 FRONTEND
                    React + TypeScript
                           │
                           ▼
                    🌐 API GATEWAY
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
     🔐 AUTH           🎵 MUSIC          👤 USER
     SERVICE           SERVICE          SERVICE
          │                │                │
          └────────────────┼────────────────┘
                           ▼
                      🗄️ MongoDB
                           │
                           ▼
                        ⚡ Redis
```

### 🧩 Services

```text
🔐 Auth Service       → Authentication & JWT
👤 User Service       → Profiles & Library
🎵 Music Service      → Songs & Albums
📚 Playlist Service   → User Playlists
🔎 Search Service     → Global Search
🌐 API Gateway        → Service Gateway
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
│
├── 🔧 docker-compose.yml
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

### 3️⃣ Configure

Create your `.env` files:

```env
NODE_ENV=development

MONGODB_URI=mongodb://localhost:27017/spotify
REDIS_URL=redis://localhost:6379

JWT_ACCESS_SECRET=your_secret
JWT_REFRESH_SECRET=your_refresh_secret
```

### 4️⃣ Start Infrastructure

```bash
docker compose up -d
```

### 5️⃣ Start Development

```bash
npm run dev
```

Then open:

```text
🎧 http://localhost:5173
```

---

## 🔐 Security

```text
🔒 JWT Authentication
🔑 Password Hashing
🛡️ Request Validation
🚦 Rate Limiting
🌐 CORS Protection
🔐 Environment Secrets
```

---

## 👥 Team Workflow

```text
                    main
                     │
                  develop
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
   feature/auth  feature/player  feature/search
        │            │            │
        └────────────┼────────────┘
                     ▼
                Pull Request
                     │
                     ▼
                   merge
```

### 📝 Commit Style

```text
✨ feat: add music player
🐛 fix: resolve auth issue
♻️ refactor: improve music service
📚 docs: update README
🎨 style: improve player UI
🧪 test: add playlist tests
```

---

## 🗺️ Roadmap

```text
✅ Modern UI
✅ Authentication
✅ Music Player
✅ Playlists
✅ Search
✅ Microservices
✅ Redis
✅ Docker

🔜 Recommendation System
🔜 Listening Statistics
🔜 Real-time Features
🔜 Production Deployment
```

---

<div align="center">

## 🎧 Stream. Discover. Create.

### Built with ❤️, ☕ & lots of code.

<br>

⭐ **Star this repository if you like the project!**

<br>

`React` · `TypeScript` · `Node.js` · `Express` · `MongoDB` · `Redis` · `Docker`

</div>

---

<div align="center">

> ⚠️ This is an independent educational project inspired by Spotify and is not affiliated with or endorsed by Spotify.

</div>
