import React from 'react'
import Tile from './Tile'

export default function GameBoard() {

	
	const numbers = Array.from({ length: 16}, (_, index) => index +1)

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
