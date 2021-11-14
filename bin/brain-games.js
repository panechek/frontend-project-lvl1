#!/usr/bin/env node

import getName from '../src/cli.js';

const name = getName();

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${name}`);
