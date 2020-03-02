import React, {useState} from 'react';
import {Badge, Tooltip} from 'reactstrap';


function Rank(props) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <div
        style={{padding: 6,
                color: "#666",
                width: 38,
                height: 38,
                "margin-right": 10,
                position: "absolute",
                top: 18,
                bottom: -9,
                right: 16,
                "text-align": "center"}}
        id="Rank">
        <h6>
          <div>
            <Badge color="secondary">
              {props.rankingPlace}
            </Badge>
          </div>
        </h6>
      </div>
    <Tooltip style={{"background-color": "rgb(155, 158, 157)"}} placement="left" isOpen={tooltipOpen} target="Rank" toggle={toggle}>
      Место в рейтинге THE
    </Tooltip>
    </div>);
}

export default Rank;
