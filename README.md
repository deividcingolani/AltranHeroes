
# PROJECT Altran Heroes
This is an application for a team who is playing a fantasy role-playing game and every time the heroes they play arrive at a town, they have the issue. They don't know the local population and what they can do to help them on their adventures. 

For solution this issue, this app give they all information about gnomes of the city.

## Versions
- [1.0](http://altran.herokuapp.com/) This is the actual version on production.

## fixs and functionalities to Add
- When the page set the params of filters Gnomes, dont change the url with this params
- When the select of City of Gnome change, it dont change nothing. This is because now there is a only city, but I think when there are more than 1 city.
- to Add backend of app, because with this there will be a posibily for add more gnome, edit and delete gnome.
- to Add backend for login each heroes and get his cities.
- to Fix select of Friends for mobile, because in some mobiles when is click in select, this dont show options, and sometimes when the options are showing dont do nothing.
-To fix when is settings filters gender in url
-To add profile of Heroe

## Decision core
- how table of gnomes is responsive I was need take a decision about the count of column to show, and my decision was hidden the column about details of gnomes, because I think when a heroe is show the table, he need a quickly information about name and city of gnome, and the other information is more as details.
- For show the details of gnomes, I decide use a modal because is more easy for read the information and navigate between friends.
- For table, I use component React-Table because with this I can use pagination and ordering more easy and quicly, but filters are building outside of table because when if I try put the filters inside of my table there are showing in relation with header and is not clean for a quicly lecture.
- I add a functionality where a user can use a filters and page with query-string as 
    https://altran.herokuapp.com/?gender=male
-When change the page update the url because the heroe can share this url with other heroe.

## Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v12.13.1
    $ npm --version
    6.13.4

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/deividcingolani/AltranHeroes.git
    $ cd AltranHeroes
    $ npm install

## Start & watch

    $ npm start

## Simple build for production

    $ npm run build

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull

**Note:** Unix user can just link the `git-hooks/post-merge`:

## Enable git hooks (unix only :/)

    $ npm run create-hook-symlinks

### `post-merge` (≃ `npm install`)

This hook will `npm prune && npm install` each time you `git pull` something if the `package.json` has been modified.

### `pre-commit` (≃ `npm test`)

This hook will just ensure you will commit something not broken bye pruning npm packages not in the `package.json` & eventually reinstall missings/not correctly removed packages.
Then it will try a production build.

---

## Languages & tools

### HTML

- [Jade](http://jade-lang.com/) for some templating.

### JavaScript

- [JSHint](http://www.jshint.com/docs/) is used to prevent JavaScript error.
- [JSCS](https://npmjs.org/package/jscs) is used to check coding conventions.
- [Browserify](http://browserify.org/) to handle allow us to write our client-side scripts with [es6 syntax](http://es6.github.io/) thanks to [es6ify](https://github.com/thlorenz/es6ify).
- [React](http://facebook.github.io/react) is used for UI.

### CSS
- [sass](https://sass-lang.com/) Sass is the most mature, stable, and powerful professional grade CSS extension language in the world. 
### Static server with Livereload

The app embed for development a static connect server with livereload plugged.
So each time you start the app, you get automatic refresh in the browser whenever you update a file.
