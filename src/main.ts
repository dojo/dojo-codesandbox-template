import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import renderer from '@dojo/framework/widget-core/vdom';
import Hello from './widgets/Hello';
import { v, w } from '@dojo/framework/widget-core/d';

class App extends WidgetBase {
	protected render() {
		return v('div', [
			w(Hello, { name: 'CodeSandbox' }),
			v('h2', [ 'Start editing to see some magic happen \u2728' ])
		]);
	}
}

const r = renderer(() => w(App, {}));
r.mount();
