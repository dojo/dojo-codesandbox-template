import { v } from '@dojo/framework/widget-core/d';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';

import * as css from './styles/Hello.m.css';

interface HelloProperties {
	name: string;
}

export class Hello extends WidgetBase<HelloProperties> {
	protected render() {
		const { name } = this.properties;
		return v('h1', { classes: css.root }, [
			`Hello, ${name}!`
		]);
	}
}

export default Hello;
