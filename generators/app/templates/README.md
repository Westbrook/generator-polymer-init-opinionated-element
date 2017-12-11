# \<<%= elementName %>\>

<%= elementDescription %>

## Sauce Labs based x-browser tests

When looking to expand your x-browser testing suite to include real browsers on [saucelabs.com](https://saucelabs.com/), make sure the edit `wct.conf.json` appropriately.
```
"sauce": {
  "disabled": false, // <--- change to `true`
  "username": "username",  // <--- add your username here
  "accessKey": "accessKey",  // <--- add your access key here
```

## Yarn scripting

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

To publish the current version of your documentation of GitHub pages use:
```
yarn pages
```

To release a new version of your code to Github and NPM use:
```
yarn release
```
This will also create/update a Github pages site for you component with a fresh set of `yarn analyze` restuls.

PROTIP: if any of these commands fail through the course of your development, it's possible that require `yarn post*` commands won't be called correctly. If you have trouble activating subsequent commands, try manually calling the `yarn post*` to clean up any incomplete tasks.
