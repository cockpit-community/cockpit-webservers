import { CodeBlock, CodeBlockCode, Tab, TabTitleText } from "@patternfly/react-core";
import React from "react";

class Nginx extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: [],
      activeTabKey: 0,
    };

    //this.toggle = this.toggle.bind(this);
    //this.onValueChanged = this.onValueChanged.bind(this);
    //this.onAutorenewChanged = this.onAutorenewChanged.bind(this);
  }

  onValueChanged(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    return (
      <div>
        Nginx
      </div>
    );
  }
}

export default Nginx;
