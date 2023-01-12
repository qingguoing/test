import { createSignal, createEffect } from './index.mjs';

const [count, setCount] = createSignal(0);
createEffect(() => console.log('The latest count is', count()));

setTimeout(() => {
  setCount(count() + 1);
}, 1000);
