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
- Axios

## Project Structure

```text
Playora/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── main.jsx         # React bootstrap entry
│   │   ├── App.jsx          # Main app shell
│   │   ├── App.css          # Component styles
│   │   └── index.css        # Global styles / Tailwind setup
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

## Frontend Architecture

The frontend is a Vite-powered React application that serves as the user-facing layer of Playora. It is structured as a lightweight client-side app with a clear separation between app bootstrapping, UI rendering, and API communication.

### Current Architecture

```text
Browser
  ↓
Vite Dev Server / frontend
  ↓
React Root (frontend/src/main.jsx)
  ↓
App Shell (frontend/src/App.jsx)
  ↓
UI Views / Components
  ↓
Axios API Calls
  ↓
Express Backend (src/routes, controllers, services)
  ↓
MongoDB / ImageKit / Auth Services
```

### Responsibilities by File

- `frontend/src/main.jsx`: Mounts the React application into the DOM.
- `frontend/src/App.jsx`: Acts as the main app container and root-level UI coordinator.
- `frontend/src/index.css`: Defines global styling and theme-level rules.
- `frontend/src/App.css`: Holds stylesheet logic for component-specific layout and visuals.
- `frontend/index.html`: Base HTML shell used by Vite.

### Request and Data Flow

A typical frontend-to-backend interaction follows this flow:

```text
1. User interacts with a page or control
              ↓
2. React component validates input and manages loading/error UI
              ↓
3. Axios sends an HTTP request to the relevant /api endpoint
              ↓
4. Express route applies middleware and calls a controller
              ↓
5. Controller uses services/models to perform the requested operation
              ↓
6. Backend returns a JSON response (and/or a media URL)
              ↓
7. React updates the UI with the result or displays an error
```

For example, a music browsing view requests the music list from the API, renders the returned items, and shows loading, empty, or error states as appropriate. For protected actions such as uploads, the backend remains responsible for authorization and validation; client-side checks are only for user experience and must not replace server-side security.

### Architectural Pattern

The current frontend follows a simple single-page application (SPA) pattern:

- Presentation layer: React components and page-level views
- App flow: coordinated by the app shell and client-side routes
- API integration: HTTP requests to the Express API, using Axios
- Styling: CSS with Tailwind CSS support

This architecture keeps the client easy to understand and extend while remaining aligned with the backend’s modular Express structure.

### Frontend Best Practices

- **Organize by feature as the app grows.** Keep related pages, components, API calls, and styles together (for example, music browsing, authentication, and artist uploads) rather than letting the root app become too large.
- **Keep components focused.** Use reusable UI components for repeated patterns and keep data-fetching or coordination logic out of purely presentational components where practical.
- **Centralize API configuration.** Use a shared Axios client for the API base URL, common headers, and consistent error handling. Keep environment-specific URLs in Vite environment variables (such as `VITE_API_BASE_URL`) and never put secrets in frontend variables.
- **Handle every request state.** Provide clear loading, success, empty, and error states, and prevent duplicate submissions where appropriate.
- **Validate at both boundaries.** Validate user input in the UI for helpful feedback, but always repeat security-sensitive validation and authorization on the backend.
- **Protect user data.** Do not expose credentials or private keys in browser code. Follow the backend’s authentication contract and avoid storing sensitive tokens in an unsafe location.
- **Make media accessible and resilient.** Use descriptive alternative text for artwork, controls with accessible labels, and sensible fallbacks when images or audio fail to load.
- **Build responsive and accessible interfaces.** Use semantic HTML, keyboard-accessible controls, visible focus states, and layouts that work across screen sizes.
- **Keep styles maintainable.** Prefer shared design tokens and reusable styles; avoid duplicating global rules across components.
- **Check quality before changes are merged.** Run `npm run lint` and `npm run build` from `frontend/`, and test key user flows such as login, browsing, and uploads when those features are available.

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
- The frontend currently follows a minimal React SPA architecture that is ready to evolve into feature-based pages and reusable components.
- The app is ready for extension with additional playback, playlist, and artist dashboard features.

## License

This project is currently using the ISC license as defined in the root `package.json`.

## Contributing

Contributions are welcome. If you want to improve the app, feel free to open a pull request or suggest new features.
