# Campaign Monitor API wrapper

[![CircleCI](https://circleci.com/gh/homezen/campaignmonitor-node.svg?style=shield)](https://circleci.com/gh/homezen/campaignmonitor-node)
[![codecov](https://codecov.io/gh/homezen/campaignmonitor-node/branch/master/graph/badge.svg)](https://codecov.io/gh/homezen/campaignmonitor-node)
[![Greenkeeper badge](https://badges.greenkeeper.io/homezen/campaignmonitor-node.svg)](https://greenkeeper.io/)

Universal javascript wrapper for campaign monitor api

## Supported platforms

Compatible with node, webpack, and browserify


## Getting Started

```bash
$ npm i --save campaignmonitor
```

```js
import campaignMonitor from 'campaignmonitor'
```

You must initialize the object with options before using.

```js
import campaignMonitor from 'campaignmonitor'

const api = campaignMonitor(options)
```

## Options

#### apiKey

API key used for campaign monitor authentication - [campaign monitor
docs](docshttps://www.campaignmonitor.com/api/getting-started/#authenticating-api-key)


## API

### Subscribers

Uses [Campaign Monitor subscribers API](https://www.campaignmonitor.com/api/subscribers/)

#### `addSubscriber`

Adds subscriber to specified list

Params

- {string} - list ID - API Subscriber List ID from Campaign Monitor

- {object} - request body - should map to fields in [subscriber api docs](https://www.campaignmonitor.com/api/subscribers/#adding-a-subscriber)

Returns

- Email address of user that was subscribed (see [CM
  docs](https://www.campaignmonitor.com/api/subscribers/#adding-a-subscriber) for more)

## Development

### Running tests

To run the full suite, run

```bash
npm test
```

### Other commands

#### `npm start`

Runs build, test, and lint watchers

#### `npm run tdd`

Run test watcher

#### `npm run lint`

Run linter

#### `npm run build`

Builds the production assets suitable for release

#### `npm run release`

Builds, git tags release, and publishes to npm


## CI/CD

### Releases

Every commit to master defaults to a patch bump.  If it needs to be a minor or major, ENSURE YOU DO
THE FOLLOWING:

If you would like to create a release, add the following to the merge commit message when you merge
a PR:

```bash
release v+<bump type>
```

Where `<bump type>` is one of:

*   major
*   minor
*   patch (default)

This will:

1.  Bump version in package.json and commit back to master
1.  Git tag that newly created commit with the new version
1.  Publish to npm



