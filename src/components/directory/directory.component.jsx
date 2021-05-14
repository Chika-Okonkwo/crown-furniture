import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";

import sections from "./directory.data";
import "./directory.styles.scss";

export class Directory extends Component {
  componentDidMount() {
    this.state = sections;
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.map(({ id, title, imageUrl, size }) => (
          <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
