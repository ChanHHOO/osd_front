import React, { Component } from "react";
import { Grid, Select } from "semantic-ui-react";

const sorting = [
  { key: "date", value: "date", text: "최신순" },
  { key: "like", value: "like", text: "좋아요순" }
];

class Sorting extends Component {
  render(){
    return(
      <Grid.Column className="sorting">
        <Select options={sorting} />
      </Grid.Column>
    )
  }
}

export default Sorting;
