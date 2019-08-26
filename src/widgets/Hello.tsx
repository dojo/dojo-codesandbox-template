import { create, tsx } from "@dojo/framework/core/vdom";

import * as css from "./styles/Hello.m.css";

interface HelloProperties {
  name: string;
}

const factory = create().properties<HelloProperties>();

export const Hello = factory(function({ properties }) {
  const { name } = properties();
  return <h1 classes={[css.root]}>{`Hello, ${name}`}</h1>;
});

export default Hello;
