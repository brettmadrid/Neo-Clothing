import React from "react";

import Directory from "../../components/Directory/Directory";
import "./HomePage.scss";

const HomePage = ({ history }) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
