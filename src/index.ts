import App from 'src/components/App.svelte';
import './normalize.css';

type SSS = string;

const ddd:SSS = '';

const dffff = (val: number) => {
  console.log(val);
};

console.log(ddd);
dffff(45);
dffff(45);
dffff('45');
const app = new App({
  target: document.body,
  props: { name: 'Alex' },
});

export default app;
