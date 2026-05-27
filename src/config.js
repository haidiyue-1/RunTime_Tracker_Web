const config = {
    dev: {
        API_BASE: import.meta.env.VITE_API_BASE || 'https://incidents-starter-hence-chose.trycloudflare.com', // 默认开发环境
        ADMIN_URL: import.meta.env.VITE_ADMIN_URL || 'https://runtime-tracker-admin.pages.dev/',
        SITE_TITLE: import.meta.env.VITE_SITE_TITLE || 'RunTime Tracker'
    },
    prod: {
        API_BASE: import.meta.env.VITE_API_BASE || 'https://incidents-starter-hence-chose.trycloudflare.com/api', // 默认生产环境
        ADMIN_URL: import.meta.env.VITE_ADMIN_URL || 'https://runtime-tracker-admin.pages.dev/',
        SITE_TITLE: import.meta.env.VITE_SITE_TITLE || 'RunTime Tracker'
    }
};

export default process.env.NODE_ENV === 'production' ? config.prod : config.dev;
