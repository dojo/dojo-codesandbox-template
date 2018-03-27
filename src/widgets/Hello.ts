import { v } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { WidgetProperties } from '@dojo/widget-core/interfaces';

import * as css from './styles/Hello.m.css';

interface HelloProperties extends WidgetProperties {
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
