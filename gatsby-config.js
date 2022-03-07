require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Juno`,
        siteUrl: `https://junonetwork.io`
    },
    plugins: ["gatsby-plugin-sass", "gatsby-plugin-scroll-reveal", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
        resolve: "gatsby-plugin-manifest",
        options: {
            icon: `./src/images/favicons/favicon-96x96.png`, // This path is relative to the root of the site.
            theme_color: `#312526`,
            icons: [
                {
                    src: `/images/favicons/android-icon-192x192.png`,
                    sizes: `192x192`,
                    type: `image/png`,
                },
            ],
        },
    }, "gatsby-plugin-mdx", "gatsby-transformer-remark", `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-sharp`,
            options: {
                // The option defaults to true
                checkSupportedExtensions: false,
            },
        }, {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "images",
            "path": "./src/images/"
        },
        __key: "images"
    }, {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "pages",
            "path": "./src/pages/"
        },
        __key: "pages"
    },
    {
        resolve: "gatsby-plugin-anchor-links",
        options: {
            offset: -100,
            duration: 300
        }
    }
    ]
};
