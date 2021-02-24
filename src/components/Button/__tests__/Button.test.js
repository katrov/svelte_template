import { render } from '@testing-library/svelte';
import Button from '../Button.svelte';

describe('Button component', () => {
	test('should render component correctly', () => {
		const { component } = render(Button);
		expect(component);
	});
});
