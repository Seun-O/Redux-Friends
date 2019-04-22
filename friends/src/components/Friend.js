import React from "react";

export default props => {
  return (
    <div className="ui fluid card">
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="content">
        <h1 className="header">{props.name}</h1>
        <p>{props.age}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
};
