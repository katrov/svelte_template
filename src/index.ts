import App from 'src/App.svelte';
import './normalize.css';

const app = new App({
	target: document.body,
	props: {},
	hydrate: false,
});

export default app;
