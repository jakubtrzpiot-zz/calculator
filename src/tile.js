import React from 'react';
import './tile.scss';

const Tile = (props) => {
  return <button className={props.type} >{props.char}</button>
}

export default Tile