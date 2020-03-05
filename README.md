# Possible bug in Babel?

Here are the steps to reproduce the issue locally:

```sh
npm ci              # Install dependencies
npm run build       # Rebuild the bundle (in lib)
node src/main.js    # Run the original version
node lib/main.js    # Run Babel version
```
