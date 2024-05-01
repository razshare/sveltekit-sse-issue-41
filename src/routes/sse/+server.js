// src/routes/events/+server.js
import { events } from 'sveltekit-sse';
import { get } from 'svelte/store';

/**
 * @param {number} milliseconds
 * @returns
 */
function delay(milliseconds) {
  return new Promise(function run(resolve) {
    setTimeout(resolve, milliseconds);
  });
}

export function POST({ request }) {
  return events({
    request,
    async start({ emit, lock }) {
      // eslint-disable-next-line no-constant-condition
      while (get(lock)) {
        const date = new Date();
        console.log('Sending message: ' + date);
        emit(
          'message',
          `Hello, the time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.`
        );
        await delay(1000);
      }
    }
  });
}
