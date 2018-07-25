import { ProjectorMixin } from '@dojo/framework/widget-core/mixins/Projector';
import Hello from './widgets/Hello';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';

class App extends WidgetBase {
	protected render() {
		return v('div', [
			w(Hello, { name: 'CodeSandbox' }),
			v('h2', [ 'Start editing to see some magic happen \u2728' ])
		]);
	}
}

const Projector = ProjectorMixin(App);
const projector = new Projector();

projector.append();
