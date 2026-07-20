import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to https://<username>.github.io/<repo-name> (a project site),
  // set this to '/<repo-name>/'. If deploying to https://<username>.github.io
  // (a user site, repo named exactly <username>.github.io), leave it as '/'.
  base: '/dhaniel.github.io/',
})
