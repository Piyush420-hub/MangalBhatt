/**
 * API Base URL Resolver
 * When running in local Vite dev server (port 5173), point to FastAPI on localhost:8000.
 * When running via ngrok or production (port 8000), use relative path to prevent Mixed Content / CORS errors.
 */
export const API_BASE = typeof window !== 'undefined' && window.location.port === '5173'
  ? 'http://localhost:8000'
  : '';
