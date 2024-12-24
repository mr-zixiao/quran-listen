import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    server:{
        proxy:{
            '/api':{
                target:'https://www.zixiaocloud.online:3001/',
                changeOrigin:true,
                rewrite:path => path.replace(/^\/api/,'')
            }
        }
    }
})
