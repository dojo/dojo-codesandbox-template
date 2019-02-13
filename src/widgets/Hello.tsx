import { tsx } from '@dojo/framework/widget-core/tsx';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';

import * as css from './styles/Hello.m.css';

interface HelloProperties {
	name: string;
}

export class Hello extends WidgetBase<HelloProperties> {
	protected render() {
		const { name } = this.properties;
		return (
			<h1 classes={[css.root]}>
				{`Hello, ${name}`}
			</h1>
		);
	}
}

export default Hello;
