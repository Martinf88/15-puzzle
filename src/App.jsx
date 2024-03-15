import { useState } from 'react'
import './App.css'

function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
	<h1>15-Puzzle</h1>
	<div className='game-container'>
		<div className="tile">1</div>
		<div className="tile">2</div>
		<div className="tile">3</div>
		<div className="tile">4</div>
		<div className="tile">5</div>
		<div className="tile">6</div>
		<div className="tile">7</div>
		<div className="tile">8</div>
		<div className="tile">9</div>
		<div className="tile">10</div>
		<div className="tile">11</div>
		<div className="tile">12</div>
		<div className="tile">13</div>
		<div className="tile">14</div>
		<div className="tile">15</div>
		<div className="tile">16</div>
	</div>
    </>
  )
}

export default App
