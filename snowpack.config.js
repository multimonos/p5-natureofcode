/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: {url: '/', static: true},
        src: {url: '/dist'},
    },
    plugins: [
        ['@snowpack/plugin-sass', {style: 'compressed'}],
        '@snowpack/plugin-vue',
        '@snowpack/plugin-dotenv'
    ],
    routes: [
        /* Enable an SPA Fallback in development: */
        {
            "match": "routes", "src": ".*", "dest": "/index.html"
        },
    ],
    optimize: {
        /* Example: Bundle your final build: */
        // "bundle": true,
    },
    packageOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
};
