import React, { Component } from "react";
import { Grid, Dropdown } from "semantic-ui-react";

const sorting = [
  { key: "date", value: "date", text: "최신순" },
  { key: "like", value: "like", text: "좋아요순" }
];

class Sorting extends Component {
  render() {
    return (
      <Grid.Column className="sorting"
        widescreen={this.props.widescreen ? this.props.widescreen : null}
        largeScreen={this.props.largeScreen ? this.props.largeScreen : null}
        computer={this.props.computer ? this.props.computer : null}
        tablet={this.props.tablet ? this.props.tablet : null}
        mobile={this.props.mobile ? this.props.mobile : null}
        textAlign={this.props.textAlign ? this.props.textAlign : "right"}>
        <Dropdown selection placeholder="최신순" options={sorting} onChange={this.props.handleChange} />
      </Grid.Column>
    )
  }
}

export default Sorting;
