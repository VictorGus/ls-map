import React, {useState} from 'react';
import {Tooltip} from 'reactstrap';


function Rank(props) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  const size = props.rankingPlace > 99 ? 15 : 18

  return (
    <div>
      <div
        style={{"border-radius": "50%",
                width: 44,
                height: 44,
                padding: 6,
                background: "#fff",
                color: "#666",
                position: "absolute",
                "font-size": size,
                top: 18,
                bottom: -9,
                right: 16,
                "text-align": "center",
                border: "2px solid #666"}}
      id="Rank">{props.rankingPlace}
      </div>
      <Tooltip style={{"background-color": "rgb(155, 158, 157)"}} placement="left" isOpen={tooltipOpen} target="Rank" toggle={toggle}>
        Место в рейтинге THE
      </Tooltip>
    </div>);
}

export default Rank;
