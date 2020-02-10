import React, {Component} from 'react';

function Rank(props) {
  return (<div
            style={{"border-radius": "50%",
                    width: 36,
                    height: 36,
                    padding: 5,
                    background: "#fff",
                    color: "#666",
                    position: "absolute",
                    top: 8,
                    right: 16,
                    "text-align": "center",
                    border: "2px solid #666"}}>{props.rankingPlace}</div>);
}

export default Rank;
