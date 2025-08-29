# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


 ## Mini AI Workspace
 
## A simple React + Tailwind demo that showcases a memory-first UX.

## Features:

1)Chat area (mock notes from alpie_frontend_dataset.json)

2)Side memory panel where pinned notes appear

3)Search bar to filter notes by text or tags

4)Clean, responsive UI (desktop-first)

5)Keyboard shortcut (P) to pin/unpin notes

## *Getting Started*
1. Clone or download this project

git clone https://github.com/KrunaliJ/mini-ai-workspace.git

cd mini-ai-workspace

(or just unzip the folder if you downloaded it)

2. Install dependencies
   
Make sure you have Node.js 18+ installed.

npm install

3. Run the development server

npm run dev

This will start a local server (usually at http://localhost:5173/).

Open it in your browser.

4. Build for production

npm run build

📂 Project Structure

mini-ai-workspace/

├── public/

│   └── alpie_frontend_dataset.json   # Mock dataset

├── src/
│   ├── App.jsx                       # Main workspace UI

│   ├── index.css                     # Tailwind styles

│   ├── main.jsx                      # React entry

│   └── components/                   # (Optional) Components

├── tailwind.config.js

├── postcss.config.js

├── package.json

└── README.md
