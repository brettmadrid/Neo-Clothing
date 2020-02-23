import React, { Component } from "react";

import MenuItem from "../MenuItem/MenuItem";
import "./Directory.scss";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2
        },
        {
          title: "shoes",
          imageUrl:
            "https://images.unsplash.com/photo-1515762909411-f9aea3cb6969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 3
        },
        {
          title: "womens",
          imageUrl:
            "https://images.unsplash.com/photo-1556196115-284df79184de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          size: "large",
          id: 4
        },
        {
          title: "mens",
          imageUrl:
            "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          size: "large",
          id: 5
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
