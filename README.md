# Playora

Playora is a full-stack music application that combines an Express.js backend with a React + Vite frontend for music browsing, artist uploads, and authentication.

## Features

- User registration and login
- Artist authentication and protected music uploads
- Music and album management APIs
- React frontend powered by Vite
- MongoDB-backed data persistence
- Secure token-based authentication with JWT
- Media handling with ImageKit and Multer

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- Multer and ImageKit for file upload/media management
- dotenv for environment configuration

### Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM

## Project Structure

```text
Playora/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── src/                      # Express backend
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── app.js
├── .gitignore
├── package.json
├── server.js
├── README.md
├── package-lock.json
└── .env.example (if added locally)
```

## API Overview

The backend exposes authentication and music endpoints under the following base paths:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/music/upload`
- `POST /api/music/album`
- `GET /api/music`
- `GET /api/music/albums`
- `GET /api/music/albums/:albumId`

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB instance or MongoDB Atlas connection
- A `.env` file with required environment variables

### 1. Clone the repository

```bash
git clone https://github.com/YashasviniSharma01/Playora.git
cd Playora
```

### 2. Install dependencies

Install backend dependencies:

```bash
npm install
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root with values such as:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

If the app uses additional service credentials (for example ImageKit), add those as needed in your environment configuration.

### 4. Run the app

Start the backend server:

```bash
npm start
```

Or run the backend in development mode with nodemon:

```bash
npm run dev
```

Start the frontend development server:

```bash
cd frontend
npm run dev
```

The frontend typically runs on the Vite default port (commonly `5173`), while the backend runs on port `3000`.

## Development Notes

- The root project is configured as a Node.js/Express API server.
- The `frontend` folder contains the client app for the music experience.
- The backend is organized using MVC-style folders (`controllers`, `models`, `routes`, `middlewares`, `services`).
- The app is ready for extension with additional playback, playlist, and artist dashboard features.

## License

This project is currently using the ISC license as defined in the root `package.json`.

## Contributing

Contributions are welcome. If you want to improve the app, feel free to open a pull request or suggest new features.
