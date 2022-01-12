import React, { useState, useContext, useEffect } from 'react';
import { GameContext } from '../context/GameContext';

import '../styles/Square.css';

const Square = ({ dataKey }) => {
    const { hasWon, allSymbols, setAllSymbols, player, setPlayer } = useContext(GameContext);
    const [symbol, setSymbol] = useState('');
    const [index, setIndex] = useState(null);

    useEffect(() => {
        if (symbol) {
            let arr = allSymbols.splice(index, 1, symbol)
            setAllSymbols([...allSymbols]);

        }
    }, [index])

    const handleSquareClick = (e) => {
        if (!symbol && !hasWon) {
            if (player === 'playerOne') {
                setSymbol('X');
                setPlayer('playerTwo')
                setIndex(dataKey)
            }
            else {
                setSymbol('O');
                setPlayer('playerOne')
                setIndex(dataKey)
            }
        }

    }
    console.log(symbol);
    return (
        <div className="square" onClick={handleSquareClick} value={symbol}>
            {symbol}
        </div>
    )
}

export default Square
