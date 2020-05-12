import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Tile from './tile'
import './style.scss';

const App = () => {
	const [input, setInput] = useState();
	const getEquation = () => {
		
	}

  return(
		<div className="container">
		  <div className="calculator equation">
				<Tile 
					char={getEquation()}
					type='tile number'
				/>
			</div>
			<div className="calculator clear">
				<Tile 
					char='Clear'
					type='tile symbol'
				/>
				<Tile 
					char='='
					type='tile symbol'
				/>
			</div>
			<div className="calculator keys">
		  	<Tile
		  		char='7' 
		  		type="tile number"
		  	/>
		  	<Tile
		  		char='8' 
		  		type="tile number"
		  	/>
		  	<Tile
		  		char='9' 
		  		type="tile number"
		  	/>
		  	<Tile
		  		char='-' 
		  		type="tile symbol"
		  	/>
		  	<Tile
		  		char='4' 
		  		type="tile number"
		  	/>
		  	<Tile
		  		char='5' 
		  		type="tile number"
		  	/>
		  	<Tile
		  		char='6' 
		  		type="tile number"
		  	/>
		  	<Tile
		  		char='+' 
		  		type="tile symbol"
		  	/>
		  	<Tile
		  		char='1' 
		  		type="tile number"
		  	/>
		  	<Tile
		  		char='2' 
		  		type="tile number"
		  	/>
		  	<Tile
		  		char='3' 
		  		type="tile number"
		  	/>
		  	<Tile
		  		char='÷' 
		  		type="tile symbol"
		  	/>
				<Tile
		  		char='%' 
		  		type="tile number"
		  	/>
		  	<Tile
		  		char='0' 
		  		type="tile number"
		  	/>
		  	<Tile
		  		char='.' 
		  		type="tile number"
		  	/>
		  	<Tile
		  		char='×' 
					type="tile symbol"
				/>
		  </div>
		</div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'))