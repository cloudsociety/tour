import { createStore } from "@stencil/store";

const { state, get, set } = createStore({
  tips: [],
  current: 0,
  play: true,
});

export default state;

export { get, set };
