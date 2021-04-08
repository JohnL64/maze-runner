import React, { Component } from 'react';

const Button = (props) => {

  return(
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <button
      className={props.className}
      id={props.id}
      onMouseDown={props.onMouseDown}
      onMouseOver={props.onMouseOver}
      onMouseUp={props.onMouseUp}
      onClick={props.onClick}
    ></button>
  );

};

export default Button;