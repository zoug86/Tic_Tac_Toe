import React, { useContext } from 'react'
import Board from '../components/Board'
import { GameContext } from '../context/GameContext';


const Home = () => {
    const { hasWon, player } = useContext(GameContext);
    const handleClick = () => {
        window.location.reload(false);
    }
    return (
        <div>
            <h1>Tic Tac Toe</h1>
            {!hasWon && <p>{player === 'playerOne' ? 'Player One: X' : 'Player Two: O'}</p>}
            {hasWon && <p>{player === 'playerOne' ? 'Player One has Won!' : 'Player Two has Won!'}</p>}
            <Board />
            <button onClick={handleClick}>Reset?</button>
        </div>
    )
}

export default Home
