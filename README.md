# Genicon Chat

Genicon Chat is an all‑in‑one, self‑hostable AI app to chat with your documents, build simple agents, and run locally or in the cloud. It began as a fork of AnythingLLM and now offers nearly the same features under the Genicon brand.

## Highlights

- Chat with your files (PDF, TXT, DOCX, and more) with clear citations
- Local or hosted deployment, multi‑user ready
- Works with popular LLMs and vector databases (OpenAI, Anthropic, Ollama, PGVector, LanceDB, etc.)
- Simple web UI plus developer API

## Quick start (local development)

1. Install dependencies and set up env files

Windows (cmd):

- Ensure Node.js 18+ and Yarn are installed
- In the repo root, run:

```cmd
yarn setup
```

This installs packages for server, collector, and frontend, and creates example .env files.

1. Start services in separate terminals (or use the VS Code tasks in this workspace):

```cmd
yarn dev:server
yarn dev:collector
yarn dev:frontend
```

Then open the printed localhost URLs for the server and the frontend.

## Scripts

- `yarn setup` – install packages and copy example env files
- `yarn dev:server` – start the API server (Express + Prisma)
- `yarn dev:collector` – run the document collector
- `yarn dev:frontend` – start the React frontend

## License

MIT
