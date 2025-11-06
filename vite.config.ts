import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';
import react from '@vitejs/plugin-react';
import path from 'path';
import { tanstackRouter } from '@tanstack/router-vite-plugin';
import tailwindcss from '@tailwindcss/vite'

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
    plugins: [
        tanstackRouter({
            target: 'react',
            autoCodeSplitting: true,
        }),
        react(),
        tailwindcss()
    ],
    build: {
        outDir: 'docs',
    },
    resolve: {
        alias: {
            '@': path.resolve('./src'),
        },
    },
});

