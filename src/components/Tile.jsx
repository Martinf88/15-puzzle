import React from 'react'

export default function Tile({ number, handleTileMove, totalTiles }) {

	const tileClassName = number === totalTiles ? "tile empty-tile" : "tile";


  return (
	<div className={tileClassName} onClick={handleTileMove}>
		{number}
	</div>
  )
}
