import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
    plugins: [reactRefresh()],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimizeDeps: {
        include: ['react', 'react-dom']
    },
    esbuild: {
        jsxInject: `import React from 'react';`
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8088', // your backend server URL and port
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
