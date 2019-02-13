import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import renderer from '@dojo/framework/widget-core/vdom';
import { tsx } from '@dojo/framework/widget-core/tsx';
import '@dojo/themes/dojo/index.css';

import Hello from './widgets/Hello';

class App extends WidgetBase {
	protected render() {
		return (
			<div>
				<Hello name="Dojo CodeSandbox"/>
				<h2>{'Start editing to see some magic happen \u2728'}</h2>
			</div>
		);
	}
}

const r = renderer(() => <App />);
r.mount();
