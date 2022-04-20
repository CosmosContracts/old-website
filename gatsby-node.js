exports.onCreateWebpackConfig = ({
                                     stage,
                                     rules,
                                     loaders,
                                     plugins,
                                     actions,
                                 }) => {
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.mov$/,
                    use: [
                        // You don't need to add the matching ExtractText plugin
                        // because gatsby already includes it and makes sure it's only
                        // run at the appropriate stages, e.g. not in development
                        `file-loader`,
                    ],
                },
            ],
        },
        plugins: [
            plugins.define({
                __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
            }),
        ],
    })
}
