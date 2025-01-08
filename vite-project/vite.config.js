import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';  // Importing autoprefixer correctly

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss('./src/tailwind.config.js'),  // Path to tailwind config
        autoprefixer(),  // Correct usage of autoprefixer
      ],
    },
  },
});
