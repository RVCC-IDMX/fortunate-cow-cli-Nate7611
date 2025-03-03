# Fortunate Cow CLI

**Description:** A simple CLI and module that displays a random fortune using cowsay. This project demonstrates how to use command line argument parsing with `yargs`, display messages with `cowsay` wrapped in a decorative box via `boxen`, and includes ESLint configuration to lint both JavaScript and JSON files.

## Usage

Install the packages:

```
npm install
```

You can run the CLI application using the following command:

```
npm start
```

This command executes the `cli.mjs` file, which uses `yargs` to parse command line options. For example, to display a motivational fortune, you can run:

```
node cli.mjs --category motivational
```

Alternatively, you can pass additional CLI arguments when using npm start by including a quoted double dash. For example:

```
npm start "--" --category motivational
```

## Project Structure

*   `package.json` – Contains project metadata, scripts, dependencies, and devDependencies.
*   `cli.mjs` – The command-line entry point that parses options using `yargs` and displays the fortune in a decorative box.
*   `src/fortunateCow.js` – Exports a function that returns a cowsay message with a random fortune. It demonstrates filtering by category.
*   `src/fortunes.json` – A JSON file containing an array of fortune objects.
*   `eslint.config.js` – Contains configuration for ESLint to lint both JavaScript and JSON files.
*   `documents/index.html` – Explanations and hints on how to use yargs, cowsay, and boxen.

## ESM and JSON Module Imports

This project is built as an ECMAScript Module (ESM) project. It uses modern JavaScript syntax with `import` and `export` statements instead of the older CommonJS `require` and `module.exports` system.

Because it is ESM, we have the `"type": "module,"` line in `package.json` and we are using `.mjs` in our command line app to alert Node that the file is using module syntax.

An additional advantage of using ESM is that you can import JSON files directly into your JavaScript files using the import attribute syntax. For example, in `src/fortunateCow.js` you can see:

```
import fortunesData from './fortunes.json' with { type: 'json' };
```

This syntax tells Node.js to treat `fortunes.json` as a JSON module. Starting with Node.js version 22.14.0, this feature is fully supported without any experimental warnings.

## Linting

To lint project files (JavaScript and JSON), run:

```
npm run lint
```

Licensed under MIT.
