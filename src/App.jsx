import './css/header.css'
import './css/game-board.css'
import './css/tile.css'
import './css/new-game.css'
import './App.css'
import GameBoard from './components/GameBoard'
import Header from './components/Header'
import Newgame from './components/Newgame'

function App() {


  return (
    <div className='container'>
		<Header/>
		<GameBoard/>
		<Newgame/>
    </div>
  )
}

export default App
