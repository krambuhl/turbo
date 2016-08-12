# Turbo

turbo is a thing©

## Post Clone

    If you haven't linked you local components, you should do that first. Check out the `turbo-components` repo for instructions.

After pulling this repository to your machine, you should link the components repo dependency by running `npm link turbo-components` in the repo directory. This will tell node to resolve `require('turbo-components')` to you local component repository instead of to `node_modules`.

## Commands

__Build__

Clean `dist` directory, then compiles templates to html, css is compiled using postcss, and js is bundled using browserify.

```
npm run build
```

__Watch__

Watches files and runs build commands when changes occur.

```
npm run watch
```

__Develop__

If you're developing, you probably want to build, then watch for file changes.

```
npm run develop
```

__Start Local Server__

Starts local static server at [localhost:8080](http://localhost:8080)

```
npm run start
```

