import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import { resolve } from 'path'
import manifest from './src/manifest'

const developmentExtensionPublicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5LJ/MOxbhQMcGQ4D459eOr0rUPeHbkpAWDvuawI4NT4jzY4A/0U59cZnEO2O2drO6KPdYHl3EpXhU/LaWriCV+05YzjqqdJ0TaPtYamzOvwZCkErXJTAzhnX9bmUybukbx6/euUnl6BFlAgHQqMaXgY9gph6mMecc9ckT7h5UGaqSWGugL23Ly4kdPvGfqTWUul+GAw9ZIyxVFk0broo9cG6OylI2n9K38/+VjFphFmEZi+vv4WIL1HDzojkhEMQY9RrBP6y+wJ8/IX4KQnUMoEqkZpcjzXpalPTkWw6i0+pM3nqhYHMKQ46NjfNb7eVo3hwbOwUeFXjYpC1RUjzNwIDAQAB'

export default defineConfig(({ mode }) => {
  const isDevelopmentExtensionBuild = mode === 'extension-dev'
  const buildManifest = isDevelopmentExtensionBuild
    ? { ...manifest, key: developmentExtensionPublicKey }
    : manifest

  return {
    build: {
      // Keep development and production extension artifacts isolated.
      outDir: isDevelopmentExtensionBuild ? 'dist-dev' : 'dist-new',
    },
    plugins: [
      react(),
      crx({ manifest: buildManifest }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  }
})
