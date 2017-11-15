# \<<%= elementName %>\>

<%= elementDescription %>

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

## Yarn scripting

To delete your currently install bower component files and reinstall use:
```
yarn install:bower:clean
```

To build component documentation use:
```
yarn analyze
```

To lint your styles, Polymer code, JS, and HTML use:
```
yarn lint
```

To release a new version of your code to Github and NPM use:
```
yarn release
```
This will also create/update a Github pages site for you component with a fresh set of `yarn analyze` restuls.
