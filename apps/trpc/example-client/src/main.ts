import { trpc } from './trpc.ts';

const res = await trpc.echo.echoMessage.query({
  inputMessage: 'Client query!'
});

console.log(res);
