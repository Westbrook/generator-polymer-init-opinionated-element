# \<<%= elementName %>\>

<%= elementDescription %>

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="<%= elementName %>.html">
    <style>
      <%= elementName %> {
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<<%= elementName %>>
</<%= elementName %>>
```

## Usage
Add notes on the usage of your component here.

## Styling

| Custom property | Description | Default |
| --- | --- | --- |
| `--custom-property` | What it does | `value` |

# Development

## Clone the repo
```
git clone https://github.com/<%= orgName %>/<%= elementName %>.git
```

## Getting started
Make sure you have both `yarn` and `bower` installed locally. Then run the following to get all of your dependancies installed:
```
yarn && yarn install:bower:clean
```

## Sauce Labs based x-browser tests

When looking to expand your x-browser testing suite to include real browsers on [saucelabs.com](https://saucelabs.com/), make sure the edit `wct.conf.json` appropriately.
```
"sauce": {
  "disabled": false, // <--- change to `true`
  "username": "username",  // <--- add your username here
  "accessKey": "accessKey",  // <--- add your access key here
```
[Learn more](https://github.com/Polymer/web-component-tester#plugins) about working with Sauce Labs and web-component-tester to take full advantage of it in your project.

## Yarn scripting

####
To build component documentation use:
```
yarn analyze
```

#### Bower
Bower manages the client side dependancies of this component. It can sometime get out of date, for reseasons related to it's deprecation and a pending move to NPM for the same, and the following command will help avoid issues in intalling and managing those dependancies. To delete your currently install bower component files and reinstall use:
```
yarn install:bower:clean
```

#### Linting
To lint your styles, Polymer code, JS, and HTML use:
```
yarn lint
```
This is great for when you're refactoring file connections.

#### Serve locally
While working use the following to run a Browser Sync server to hot update your pages:
```
yarn live
```
While this is running you can access the following helpful URLs:

| URL | Description |
| --- | --- |
| `/bower_components/<%= elementName %>/` | The analysis.json documentation and demos of your component. |
| `/bower_components/<%= elementName %>/test` | Your WTC tests run live in the browser of your choice. |
| `/bower_components/<%= elementName %>/demo` | For the main demo of your component. |

#### Deploy gh-pages
To publish the current version of your documentation of GitHub pages use:
```
yarn pages
```

#### Create and tag a GitHub release
To release a new version of your code to Github and NPM use:
```
yarn release
```
This will also create/update a Github pages site for you component with a fresh set of `yarn analyze` restuls.

#### Testing
To run web-component-tester with Istanbul based test coverage:
```
yarn test
```
Update your settings in `wct.conf.json` if you want to attach to Sauce Labs or other browsers, etc.

### PROTIP
If any of these commands fail through the course of your development, it's possible that require `yarn post*` commands won't be called correctly. If you have trouble activating subsequent commands, try manually calling the `yarn post*` to clean up any incomplete tasks.
