const fs = require('fs');
const util = require('util');
const pMap = require('p-map');
const globby = require('globby');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const TRANSFORM_CONCURRENCY = 10;

const relativizeManifest = async () => {
    // See https://github.com/moxystudio/gatsby-plugin-ipfs/issues/24
    // replace prefix paths for manifest file
    const path = 'public/manifest.webmanifest';
    const buffer = await readFileAsync(path);
    let contents = buffer.toString();

    if (!contents.includes('__GATSBY_IPFS_PATH_PREFIX__')) {
        return;
    }

    contents = contents
        .replace('"/__GATSBY_IPFS_PATH_PREFIX__"', '"/"')
        .replace(/\/__GATSBY_IPFS_PATH_PREFIX__\//g, '/');

    await writeFileAsync(path, contents);
};

const patchInvalidJS = async () => {
    // There appears to be a bug in gatsby-plugin-ipfs:
    //     - https://github.com/moxystudio/gatsby-plugin-ipfs/blob/bc2df21052c14c3945187ce4f4a1eb94cd196b96/src/gatsby-node.js#L46
    //     - There, "/__GATSBY_IPFS_PATH_PREFIX__/" strings are replaced with __GATSBY_IPFS_PATH_PREFIX__ + "/"
    //     - But if __GATSBY_IPFS_PATH_PREFIX__ is itself within a string, the (+ "/") would lead to quotation imbalance and result in invalid JS.
    //     - In particular, in one of the generated JS files:
    //         - Original: throw new Error("We couldn't load \"/__GATSBY_IPFS_PATH_PREFIX__/page-data/sq/d/"+t+'.json"')
    //         - Final: throw new Error("We couldn't load \ __GATSBY_IPFS_PATH_PREFIX__/page-data/sq/d/"+t+'.json"') <- missing double quote before '+' to be valid JS
    // If there's an escaped double quote before /__GATSBY_IPFS_PATH_PREFIX__, then it's part of a string, and after gatsby-plugin-ipfs processing,
    // we'll be left with '\ __GATSBY_IPFS_PATH_PREFIX__ + ", so we can patch this particular case:
    const paths = await globby(['public/**/*.js']);

    await pMap(paths, async (path) => {
        const buffer = await readFileAsync(path);
        let contents = buffer.toString();

        // Skip if there's nothing to do
        if (!contents.includes('\\ __GATSBY_IPFS_PATH_PREFIX__ + "')) {
            return;
        }

        // Add closing double quote to make the JS valid again
        contents = contents
            .replace('\\ __GATSBY_IPFS_PATH_PREFIX__ + "', '\\ __GATSBY_IPFS_PATH_PREFIX__" + "');

        await writeFileAsync(path, contents);
    }, { concurrency: TRANSFORM_CONCURRENCY });
};

exports.onPostBuild = async ({ reporter }) => {
    await relativizeManifest();
    await patchInvalidJS();
};
