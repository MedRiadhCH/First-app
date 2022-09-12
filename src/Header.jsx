import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1 style={styless}>hello from Header {props.number}</h1>
    </div>
  );
};

const styless = {
  color: "blue",
  backgroundColor: " yellow ",
};
export default Header;
