import './normalize.scss';
import App from 'src/App.svelte';

const app = new App({
	target: document.body,
	props: {},
	hydrate: false,
});

export default app;
