# Global npm scripts at ~/npm

By Weng Fei Fung. These are global npm scripts that your team members can run as long as they're placed at their home directory (~/npm). This speeds up migration, not requiring the editing of .bash_profile or .zshrc and then re-sourcing.

We take advantage of the `npm run SCRIPT --prefix ~/npm` which switches package.json directory temporarily for the command, so it's able to run npm scripts off ~/npm. The scripts will act on the current folder it's called from or in some case requires the passthrough of pwd:
```
npm run SCRIPT --prefix ~/npm `pwd` someArg
```

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

For any  .sh file, make sure to enable execution: chmod u+x FILE.sh