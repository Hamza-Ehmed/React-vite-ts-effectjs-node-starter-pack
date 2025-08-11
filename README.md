# React Vite TypeScript Effect-TS Node.js Starter Pack

<p align="center">
  <a href="https://vitejs.dev/" target="_blank">
    <img src="https://vitejs.dev/logo.svg" alt="Vite Logo" width="60">
  </a>
  <a href="https://react.dev/" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="60">
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript Logo" width="60">
  </a>
  <a href="https://effect.website/" target="_blank">
    <img src="https://img.freepik.com/premium-vector/3d-text-effect-with-word-effect_956226-721.jpg" alt="Effect-TS Logo" width="60">
  </a>
  <a href="https://nodejs.org/" target="_blank">
    <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js Logo" width="60">
  </a>
</p>

A robust and opinionated starter pack designed to kickstart your full-stack applications with a modern, type-safe, and functional approach. This template combines **React** for the frontend, **Vite** for blazing-fast development, **TypeScript** for end-to-end type safety, **Effect-TS** for powerful functional error handling and asynchronous operations, and a **Node.js** backend.

---

## ✨ Features

- **⚡️ Vite Powered Frontend**: Experience incredibly fast hot module reloading (HMR) and optimized builds.
- **⚛️ React 18**: Leverage the latest features of React for building dynamic user interfaces.
- **ʦ TypeScript End-to-End**: Write type-safe code across your entire application, from frontend components to backend APIs, catching errors at compile-time.
- **✅ Effect-TS Integration**: Embrace purely functional, typed, and composable error handling and asynchronous programming. Perfect for complex data flows and robust application logic.
- **🚀 Node.js Backend**: A solid foundation for your server-side logic, ready for API development.
- **🔌 Axios for HTTP**: A powerful, promise-based HTTP client for making API requests.
- **🛡️ Zod/io-ts (or similar)**: Pre-configured or easily integratable for **runtime JSON validation** against TypeScript interfaces, ensuring data integrity from external sources.
- **Modular Structure**: Organized project layout for both client and server, promoting maintainability and scalability.

---

## 🛠️ Technologies Used

### Frontend

- **React**: UI Library
- **Vite**: Build Tool
- **TypeScript**: Language
- **Effect-TS**: Functional programming for effects, error handling, and concurrency
- **Axios**: HTTP Client for API calls
- _(Optional/Placeholder)_ **Zod**: Runtime validation (recommended, you might add it if not already present)

### Backend (Node.js)

- **Node.js**: JavaScript Runtime
- **TypeScript**: Language
- **Express.js (or similar)**: Web Framework (common choice for Node.js APIs)
- **Effect-TS**: For server-side business logic and error handling (optional, but highly recommended for consistency)
- _(Potential)_ **dotenv**: For environment variable management
- _(Potential)_ **TypeORM/Prisma**: For ORM/Database access

---

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm
- **yarn (optional, but commonly used):**

  ```bash
  npm install -g yarn
  ```

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Hamza-Ehmed/React-vite-ts-effectjs-node-starter-pack.git
   ```

   ```bash
   cd React-vite-ts-effectjs-node-starter-pack
   ```

2. **Install dependencies for both client and server:**

   **Install yarn**

   ```bash
   cd client
   npm install -g yarn
   ```

   **For the Frontend (client/):**

   ```bash
   cd client
   yarn install # or yarn install
   ```

   **For the Backend (server/):**

   ```bash
   cd ../server
   yarn install # or yarn install
   ```

3. **Configure Environment Variables (Optional but Recommended):**
   Create a `.env` file in the `server/` directory for backend environment variables (e.g., database connection strings, API keys).

   ```
   # server/.env
   PORT=5000
   DATABASE_URL="your_database_connection_string"
   # etc.
   ```

   And similarly in the `client/` directory for frontend environment variables if needed.

### Running the Project

**1. Start the Backend Server:**

From the `server/` directory:

```bash
npm run dev # or yarn dev
```
