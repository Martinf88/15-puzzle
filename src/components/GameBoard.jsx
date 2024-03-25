import React from 'react'
import Tile from './Tile'

export default function GameBoard() {

	/* 
   The 'numbers' array is generated using Array.from() to create an array containing numbers from 1 to 16.
	*/
	const numbers = Array.from({ length: 16}, (_, index) => index +1)
	// 	Alternative: const numbers = [];
	// 	for (let i = 1; i <= 16; i++) {
	// 	numbers.push(i);
	//   }

	shuffleArray(numbers);
	console.log(numbers);


	function shuffleArray(array) {
		for (let i = array.length -1; i > 0; i--){
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	function handleTileMove(params) {
		
	}

  return (
	<div className='game-board'>
		{numbers.map((number) => (
			<Tile 
			key={number} 
			number={number}
			totalTiles={numbers.length}
			handleTileMove={handleTileMove}

			/>
		))}
	</div>
  )
}
