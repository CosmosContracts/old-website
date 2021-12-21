module.exports = {
    siteMetadata: {
        title: 'Juno',
        titleTemplate: 'Juno - %s',
        keywords: ['Juno'],
        description: 'Juno is an interoperable smart contract network and a zone part of the Cosmos Network. Highly scalable, robust, secure and easy to deploy!',
        url: 'https://junochain.com',
        image: '/assets/logos/logo_512x512.png',
    },
    pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Juno',
                short_name: 'Juno',
                start_url: '.',
                background_color: '#000000',
                theme_color: '#000000',
                display: 'standalone',
                icons: [
                    {
                        src: 'favicon.ico',
                        sizes: '64x64 32x32 24x24 16x16',
                        type: 'image/x-icon',
                    },
                    {
                        src: 'assets/logos/logo_192x192.png',
                        type: 'image/png',
                        sizes: '192x192',
                    },
                    {
                        src: 'assets/logos/logo_512x512.png',
                        type: 'image/png',
                        sizes: '512x512',
                    },
                ],
            },
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-ipfs',
    ],
};
