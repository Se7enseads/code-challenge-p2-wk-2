# 🤖 Bot Battlr Web App

**_Bot Battlr web app shows the galactic overlord a web app that will allow them to browse through a list of robots, view a robot's details, and, enlist a bot into their army._**

## Table of Contents

- [Getting Started](#🚀-getting-started)
- [Usage](#usage)
- [Common Errors](#⚠-common-errors)
- [License](#📝-license)

# 🚀 Getting started

Before proceeding, make sure to [download](https://github.com/Se7enseads/Bot-Battlr/archive/refs/heads/main.zip) or to `clone` the project files onto your machine in order to run the project.

## GIT

To `clone` this repo ensure you have [Git](https://git-scm.com/) installed onto your local machine.

To check if git is already installed, run this command in your terminal:

```bash
git --version
```

### Using https

```bash
git clone https://github.com/Se7enseads/Bot-Battlr
```

### Using SSH

To use [SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) you first need to [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) this repo onto your github account.

To fork this repo click the drop down button or arrow next to the name `fork` and then click on `create a new fork` or click this [link](https://github.com/Se7enseads/Bot-Battlr/fork) to direct you to the forking page.

Click on `Create Fork` to fork.

![Fork image](public/resources/fork.png 'Fork')

![Fork page](public/resources/forking_page.png 'Fork Page')

After forking the repo, click on the drop down arrow next to the `green code button`, select the `SSH option` and copy the code provided.

![SSH image](public/resources/SSH.png 'SSH')

```bash
git@github.com:[Your-username]/[repo]
```

For more information about git you can checkout the git [documentation.](https://git-scm.com/docs)

# Usage

To use the web app, the required files are need to have been downloaded or cloned. **(Refer to the GIT section in Getting Started).**

## Setup

To run the app follow these steps:

1. Open your file explorer or press `Ctrl + E`.

2. Navigate to where you cloned the folder in this [step](#using-ssh).

3. Right-click on the folder.

4. Click on `Open with Application` and select `Visual Studio Code`.**(The location of these buttons may vary depending on your Operating System)**

5. Open a new terminal by doing `Ctrl + Shift + backtick` or on the title bar select `Terminal` and the select `New Terminal`.

6. A terminal should pop up from the bottom of the screen.

7. Run the following command to install the dependencies needed to run the app and start the app:

```bash
npm install && npm run dev
```

![install & start](public/resources/npm_dev.png 'Npm install & start')

8. While holding `Ctrl` click on the blue link `http://localhost:5173`, this should open the web app on the default browser. **_You can copy the link and paste in your preferred browser._**

<mark>**_Note:_**</mark> If there is something else running on port 5173 the program will automatically use another port another port e.g port 5174.

![npm_dev_5174](public/resources/npm_dev_5174.png 'port 5174')

## JSON Server Setup

To run this challenge you will need a [Mock API](https://web.archive.org/web/20220712163343/https://en.wikipedia.org/wiki/MockServer) (Application Programming Interface) or Mock server to create an [API](https://web.archive.org/web/20230730192208/https://en.wikipedia.org/wiki/API) to fetch/get data from.

To start using JSON Server, we need to install it.

Without closing the terminal, on the right side click the `+` icon on the top right of the terminal to create a new terminal.

![Plus icon](public/resources/plus_icon.png 'Plus Icon')

1. First check if NPM(Node Package Manager) is already installed:

```bash
npm -v
```

Make sure that the number displayed is greater than 9 or better is the latest. **If so continue to step 2**

<mark>**Note:**</mark> To download the latest version of npm, run the following command on the terminal:

```bash
npm install -g npm
```

2. To start JSON Server, run the following command in the terminal in VSCode. In our case the [name].json is db.json and make sure the [name].db is in that directory.

```bash
json-server --watch src/data/db.json
```

When run, you'll see some messaging about how to access our JSON data. By default, JSON Server will start up on port 3000. You should see a notice that you can access the server at http://localhost:3000. **_Refer [here](#⚠-common-errors) if you encounter any errors._**

![JSON Server](public/resources/json_server.png 'JSON Server running')

**For more information about JSON Server checkout their [homepage.](https://github.com/typicode/json-server)**

<mark>**_Note_ :**</mark> **Leave the Terminal open for the server to continue running in the background**

In the browser the page should look like this:

![Bot Battlr App](public/resources/BB_app.png 'Bot Battlr App')

![Bot Army App](public/resources/BB_army_app.png 'Bot Battlr App')

<mark>**_Note_ :**</mark>

- If you encounter any errors refer [here](#⚠-common-errors).
- Pressing the `X` on the terminal does not kill any process it just hides. To show the `terminal` press `Ctrl + backtick`

![X Icon](public/resources/x_icon.png)

# ⚠ Common Errors

![Npm Error](public/resources/npm_error.png 'Check your command')

1. This error signals that the npm command you run is not correct for the project it should be:

```bash
npm run dev
```

2. If the website loads but the styling if off check if you have an ad-blocker (U-Block) or a network monitor that is blocking the styling.

3. If the page loads without any data check the path the json server is watching or check if there is a `db.json` in the current directory.<br> If this happens json server creates automatically default data and a db.json to go with it in that directory

![Json Server Default](public/resources/json_server_default.png 'Default server')

# 📝 License

Copyright © 2023 [Kyle Mututo.](https://github.com/Se7enseads)<br />
This project is [MIT](LICENSE) licensed.

[👆 Back to Top](#🤖-bot-battlr-web-app)
