import React, {Component} from 'react';

function Label(props) {
  return (<span style={{color: "white", "background-color": "black",
                        "padding-right": ".6em",
                        "padding-left": ".6em",
                        "border-radius": "10rem"}}
                classname="badge-label">{props.text}</span>)
}

export default Label;
