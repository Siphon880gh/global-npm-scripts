# Global npm scripts at ~/npm

## Usage

These can be shared among your team. They place it into their home directory, such that /Users/USER_HOME/npm/*

So when switching to calling local npm scripts, they call with:
```
npm run help --prefix ~/npm
```

The idea is that everyone has the folder relative to their home directory.

## Migration

Make sure ~/npm/ or whatever path in your npm scripts is accurate on the new machine. Look at the npm scripts at package.json to adjust ~/npm if needed. If the path is changed, then the call will differ as well:
```
npm run help --prefix THEIR_DIRECTORY
```