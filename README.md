# campaignmonitor-node

[![CircleCI](https://circleci.com/gh/homezen/campaignmonitor-node.svg?style=svg)](https://circleci.com/gh/homezen/campaignmonitor-node)
[![codecov](https://codecov.io/gh/homezen/campaignmonitor-node/branch/master/graph/badge.svg)](https://codecov.io/gh/homezen/campaignmonitor-node)

node wrapper for campaign monitor api

# Supported platform

*   node v4.X and 6.X
*   npm v3.X

## Getting Started

1. `yarn` (or `npm i`)
1. `npm start`

### Running tests

To run the full suite, run

```bash
npm test
```

### Other commands

#### `npm run build`

Builds the production assets suitable for release

#### `npm run deploy`

Git tags release and publishes to npm

#### `npm start`

Runs build, test, and lint watchers

#### `npm run tdd`

Run test watcher

#### `npm run lint`

Run linter

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


## Contributing

PRs Encouraged!

Currently we are adding functions on an "as-needed" basis, if there is functionality you would like
that we have not yet implemented, please open an issue or PR.
