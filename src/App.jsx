import './css/header.css'
import './css/game-board.css'
import './css/tile.css'
import './App.css'
import GameBoard from './components/GameBoard'
import Header from './components/Header'

function App() {


  return (
    <div className='container'>
		<Header/>
		<GameBoard/>
    </div>
  )
}

export default App
