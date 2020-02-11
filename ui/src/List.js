import React, {Component} from 'react';

function List(props) {
  return(
    <div>
      <div className="cmp-list">
        {props.listHeader}
      </div>
      <ul>
        {props.studyProgramms.map(el => (<li> {el} </li>))}
      </ul>
    </div>)
}

export default List;
