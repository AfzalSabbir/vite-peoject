import {defineConfig}     from 'vite'
import vue                from '@vitejs/plugin-vue'
import ViteRequireContext from '@originjs/vite-plugin-require-context'

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
    build        : {
        lib: {
            entry   : path.resolve(__dirname, 'src/index.js'),
            name    : 'vite-project',
            fileName: (format) => `vite-project.${format}.js`,
        },
    },
    rollupOptions: {
        external: ['vue'],
        output  : {
            globals: {
                vue: 'Vue',
            },
        },
    },
    plugins      : [vue(), ViteRequireContext()],
});