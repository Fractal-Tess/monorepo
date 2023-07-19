import { ENV } from './env.js';
import type { Bar } from './types.js';

const eggs: Bar = { foo: 'Stuff' };

console.log('Program entry');
await new Promise(res => setTimeout(res, 1000));
console.log('Top-level await works');

console.log(`ENV.FOO is ${ENV.BAR}`);
