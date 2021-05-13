import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import sections from "./directory.data";
import "./directory.styles.scss";

const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, size }) => (
        <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
