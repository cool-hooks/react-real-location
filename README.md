# [react-real-location](https://github.com/cool-hooks/react-real-location)

[![NPM version](http://img.shields.io/npm/v/react-real-location?style=flat-square)](https://www.npmjs.com/package/react-real-location)
[![NPM downloads](http://img.shields.io/npm/dm/react-real-location?style=flat-square)](https://www.npmjs.com/package/react-real-location)
[![NPM license](https://img.shields.io/npm/l/react-real-location?style=flat-square)](https://www.npmjs.com/package/react-real-location)
[![Codecov](https://img.shields.io/codecov/c/github/cool-hooks/react-real-location?style=flat-square)](https://codecov.io/gh/cool-hooks/react-real-location)
[![Travis](https://img.shields.io/travis/cool-hooks/react-real-location/master?style=flat-square)](https://travis-ci.org/cool-hooks/react-real-location)
[![Bundle size](https://img.shields.io/bundlephobia/min/react-real-location?style=flat-square)](https://bundlephobia.com/result?p=react-real-location)

## About

Get current location from react-router outside the Switch component

## How to Install

First, install the library in your project by npm:

```sh
$ npm install react-real-location
```

Or Yarn:

```sh
$ yarn add react-real-location
```

## Getting Started

**• Import hook in React application file:**

```js
import { useRealLocation } from 'react-real-location';
```

#### Returned Values

| Type                                                  | Description             |
| ----------------------------------------------------- | ----------------------- |
| [Location](https://reactrouter.com/web/api/location/) | Current location params |

#### Example

```js
// App.js

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useRealLocation } from 'react-real-location';

import Home from './pages/Home';
import Product from './pages/Product';
import Client from './pages/Client';

const App = () => {
  const { pathname } = useRealLocation();

  return (
    <>
      <p>{pathname}</p>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={Product} />
        <Route path="/client/:id" component={Client} />

        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
};

export default App;
```

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
