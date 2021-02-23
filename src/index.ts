import App from 'src/components/App.svelte';
import './normalize.css';

const app = new App({
	target: document.body,
	props: { name: 'Alex' },
});

export default app;
