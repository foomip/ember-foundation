# ember-foundation

[![NPM version](https://img.shields.io/npm/v/ember-foundation.svg?style=flat-square)](https://www.npmjs.com/package/ember-foundation)
[![Ember CLI version](https://img.shields.io/badge/ember--cli-0.2.7-d84a32.svg?style=flat-square)](http://www.ember-cli.com)
[![Ember version](https://img.shields.io/badge/ember-1.12.0-e1563f.svg?style=flat-square)](http://emberjs.com)
[![Foundation version](https://img.shields.io/badge/foundation-5.5.2-085a78.svg?style=flat-square)](http://foundation.zurb.com)

An Ember CLI addon for components using the Zurb Foundation 5 library

## Warning!

Please note that I am no longer maintaining this repo. If you'd like ownership of it, let me know.

## Install

Within an ember-cli app, run:

```sh
ember install ember-foundation
```

## Stylesheets

### Using SASS

In your app.scss, simply import "ember-foundation":

```scss
// app/styles/app.scss

@import "ember-foundation";
```

This will include normalize.css and all Foundation styles.

### Using CSS

To use plain CSS, you'll need to import the CSS files within your Brocfile.js:

```js
// Brocfile.js

app.import('bower_components/foundation/css/normalize.css');
app.import('bower_components/foundation/css/foundation.css');
```

## Component Documentation Pages

The tests/dummy app included in this repository includes demos and examples for all of the Ember-based components. You can view this app at its public location, [http://joshforisha.github.io/ember-foundation](http://joshforisha.github.io/ember-foundation).

To build the dummy app yourself, simply run `ember serve` or `ember build` from the root folder of this addon. Note that you will need to have the development dependencies installed for the addon, so you'll need to run `npm install` and `bower install` as well.
