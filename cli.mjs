#!/usr/bin/env node
/**
 * @file cli.mjs
 * @description CLI entry point for the Fortune Cow CLI application.
 * This script generates a random fortune based on the provided CLI flag (category),
 * wraps it in a cowsay message, and prints it inside a decorative box.
 *
 * Usage: node cli.mjs --category motivational
 *
 * @module cli
 * @see https://nodejs.org/api/esm.html
 * @see https://github.com/yargs/yargs
 * @see https://github.com/sindresorhus/boxen
 */

import process from 'process';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { fortunateCow } from './src/fortunateCow.js';
import boxen from 'boxen';

// Parse CLI flags using yargs.
const argv = yargs(hideBin(process.argv))
  .option('category', {
    alias: 'c',
    type: 'string',
    description: 'Select fortunes by category',
  })
  .help()          // Enable help option
  .alias('help', 'h')
  .argv;

// Generate the fortune message using the fortunateCow() function.
const fortuneMessage = fortunateCow(argv.category);
const boxedMessage = boxen(fortuneMessage, {
  padding: 2,
  margin: 1,
  borderStyle: {
    topLeft: ' <',
    topRight: '>',
    bottomLeft: ' <',
    bottomRight: '>',
    top: '~',
    bottom: '~',
    left: '{=',
    right: '=}'
  },
  borderColor: 'cyan',
  backgroundColor: 'black',
  title: 'Cowsay',
  titleAlignment: 'center'
});

console.log(boxedMessage);
