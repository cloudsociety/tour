import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";
import state from "../../utils/store";

@Component({
  tag: "tour-tip",
  styleUrl: "tour-tip.css",
  shadow: true,
})
export class TourTip implements ComponentInterface {
  @Prop() tipText: string;
  @Prop() order: number;

  componentWillLoad() {
    state.tips[this.order - 1] = this.tipText;
  }

  endTour() {
    state.current = -1;
    state.play = false;
  }

  render() {
    console.log(state);
    return (
      <Host>
        <slot></slot>
        <div hidden={state.current !== this.order - 1}>
          {this.tipText} - {this.order}
          {state.current !== 0 && (
            <button type="button" onClick={() => state.current--}>
              Previous
            </button>
          )}
          {state.current + 1 === state.tips.length ? (
            <button type="button" onClick={this.endTour}>
              End Tour
            </button>
          ) : (
            <button type="button" onClick={() => state.current++}>
              Next
            </button>
          )}
        </div>
      </Host>
    );
  }
}
