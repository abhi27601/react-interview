import React, { PureComponent } from "react";

export class Purecomp extends PureComponent {
  render() {
    return <div>{this.props.name} AE IN pure component</div>;
  }
}
