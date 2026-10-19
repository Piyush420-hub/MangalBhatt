/**
 * API Base URL Resolver
 * 1. If VITE_API_URL is specified in .env, use that URL.
 * 2. If running on local Vite dev server (port 5173), default to http://localhost:8000.
 * 3. In production, unified port 8000, or ngrok, use relative path '' to eliminate CORS and Mixed Content issues.
 */
const envApi = import.meta.env?.VITE_API_URL;

export const API_BASE = (envApi !== undefined && envApi !== '')
  ? envApi
  : (typeof window !== 'undefined' && window.location.port === '5173'
      ? 'http://localhost:8000'
      : '');
