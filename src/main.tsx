import { renderer, create, tsx } from '@dojo/framework/core/vdom';

import Hello from './widgets/Hello';

const factory = create();

const App = factory(function App() {
	return (
		<div>
			<Hello name="Dojo CodeSandbox"/>
			<h2>{'Start editing to see some magic happen \u2728'}</h2>
		</div>
	);
});

const r = renderer(() => <App />);
r.mount();
