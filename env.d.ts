/// <reference types="vite/client" />

// Extend ImportMetaEnv with known Vite environment variables used in this project.
interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY?: string;
  // add other `VITE_` variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
