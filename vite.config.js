import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Must match your GitHub repo name exactly (case-sensitive).
const repoName = 'Jermaine-Nico-T.-Da-o'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
})