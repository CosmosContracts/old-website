# How To Submit Your Project To The Ecosystem Page

Submit a pull request to add your project to the Juno ecosystem page.

You need to edit `ecosystems.json` in `src\contents\` and add your project's info.

Example:
```
{
  "icon": "main-icon.png",
  "title": "Test Project",
  "text": "This is a test project.",
  "featured": false,
  "category": "Dapp",
  "website": "https://testproject.testproject",
  "github": "https://github.com/GitAccount/TestProject",
  "discord": "https://discord.gg/TestProject",
  "twitter": "https://twitter.com/TestProject",
  "telegram": "https://t.me/TestProject"
}
```
**icon**: This is the name of the image file which should be present in `src\images\ecosystems\`

**title**: This is the name of your project

**text**: This is the description of your project

**featured**: This should be set to false unless coordinated with the team to be featured on the website

**category**: This is the type of your project. Choose between `Dapp`, `Contract`, `Tool`, `Project`, `NFT`, or `Soon` (if your project is coming soon and not launched yet)

**website**: This is your project's website (optional)

**github**: This is the invitation link to your Discord server (optional)

**twitter**: This is the twitter link to your project's profile (optional)

**telegram**: This is the invitation link to your telegram group/channel (optional)

## Installation

```shell
npm install
#or
yarn install
```

## Development

1.
    ```shell
    # after installing packages
    npm start
    #or
    yarn run
    #or
    gatsby develop
    ```

2. The website is now running at http://localhost:8000