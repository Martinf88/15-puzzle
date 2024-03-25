import { useState, useEffect } from 'react'
import Tile from './Tile'

export default function GameBoard() {

	const [numbers, setNumbers] = useState([]);
	
	
	function shuffleArray(array) {
		const shuffledArray = [...array];

		//Fisher-Yates shuffle
		for (let i = shuffledArray.length - 1; i > 0; i--){
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
		}
		return shuffledArray;
	}
	
	//Shuffle the array upon initial render
	useEffect(() => {
		const initialNumbers = Array.from({ length: 16}, (_, index) => index +1)
		const shuffledNumbers = shuffleArray(initialNumbers);
		setNumbers(shuffledNumbers)
	},[])

	function handleNewGameClick() {
		const shuffledNumbers = shuffleArray(numbers);
		setNumbers(shuffledNumbers)
	}

	function handleTileMove(params) {
		
	}

  return (
	<>
		<button className='new-game-btn' onClick={handleNewGameClick}>New Game</button>
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
	</>
  )
}
