import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'pages/about.html'),
          projects: path.resolve(__dirname, 'pages/projects.html'),
          gallery: path.resolve(__dirname, 'pages/gallery.html'),
          volunteer: path.resolve(__dirname, 'pages/volunteer.html'),
          donate: path.resolve(__dirname, 'pages/donate.html'),
          contact: path.resolve(__dirname, 'pages/contact.html'),
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
