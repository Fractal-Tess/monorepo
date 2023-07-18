import { ENV } from './env.js';

await new Promise(res => setTimeout(res, 1000));
console.log('Await works');

console.log(`ENV.FOO is ${ENV.BAR}`);
