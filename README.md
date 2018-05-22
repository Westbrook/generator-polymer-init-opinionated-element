# generator-polymer-init-opinionated-element [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Polymer 2.0 component with some convinence Yarn scripts and file structure decisions for your developing pleasure.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-polymer-init-opinionated-element using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
yarn global app polymer-cli
yarn global add yo
yarn global add generator-polymer-init-opinionated-element
```

Then generate your new project:

```bash
polymer init
? Which starter template would you like to use?
❯ opinionated-element - Polymer 2.0 component generator with some convinence Yarn scripts and file structure decisions for your developing pleasure.
? What is your name? (You Name)
? What is your GitHub username or organization? (recent-org)
? What is the namespace that you would like to build this component into? (org)
? What would you like this element to be called? (name-of-element) //notice that web components have to have a hyphen in the name
 What does this element do? (nothing yet, but something awesome)  
```

Then the generator will `yarn install` and `bower install` for you and you're off and running!
