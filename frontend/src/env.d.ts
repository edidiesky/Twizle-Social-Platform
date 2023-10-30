interface ImportMetaEnv {
    readonly VITE_API_BASE_URLS: string
    readonly VITE_GOOGLE_CLIENT_ID: string
    readonly VITE_GITHUB_CLIENT_SECRET: string
    readonly VITE_GITHUB_CLIENT_ID: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}