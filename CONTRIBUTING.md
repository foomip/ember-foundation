# Contributing

## Code Style

- Two spaces indentation
- Spaces between keywords and parentheses
- Spaces around *all* curly braces
- No underscores in method or variable names

## Pull Requests

I follow [git-flow](http://nvie.com/posts/a-successful-git-branching-model/), and while you don't necessarily need to follow it yourself, pull requests will only be accepted against the **develop** branch. This branch will always contain the latest development work, and as such will not be guaranteed to be stable. When the **develop** branch is in a stable state and features added to it are finalized, I will update the version as appropriate per [semantic versioning](http://semver.org), and push all to **master**. At that point, [NPM](http://npmjs.org) will also receive the new release version, and **develop** will be updated with the released changes.
