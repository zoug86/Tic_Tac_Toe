import React, { useState, createContext, useEffect } from 'react';

export const GameContext = createContext();
export const GameProvider = ({ children }) => {
    const [player, setPlayer] = useState('playerOne');
    const [allSymbols, setAllSymbols] = useState([...new Array(9)]);
    const [hasWon, setHasWon] = useState(false)

    useEffect(() => {
        const winningHandler = (arr) => {
            // Logic to check the rows
            for (let i = 0; i < arr.length; i += 3) {
                if (arr[i] && arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
                    if (arr[i] === 'X') {
                        setPlayer('playerOne')
                        setHasWon(true)
                        return
                    } else {
                        setPlayer('playerTwo')
                        setHasWon(true)
                        return
                    }
                }
            }
            // Logic to check the columns
            for (let i = 0; i < 3; i++) {
                if (arr[i] && arr[i] === arr[i + 3] && arr[i] === arr[i + 6]) {
                    if (arr[i] === 'X') {
                        setPlayer('playerOne')
                        setHasWon(true)
                        return
                    } else {
                        setPlayer('playerTwo')
                        setHasWon(true)
                        return
                    }
                }
            }
            // Logic to check the diagonals

            if (arr[0] && arr[0] === arr[4] && arr[0] === arr[8]) {
                if (arr[0] === 'X') {
                    setPlayer('playerOne')
                    setHasWon(true)
                    return
                } else {
                    setPlayer('playerTwo')
                    setHasWon(true)
                    return
                }
            }
            else if (arr[2] && arr[2] === arr[4] && arr[2] === arr[6]) {
                if (arr[2] === 'X') {
                    setPlayer('playerOne')
                    setHasWon(true)
                    return
                } else {
                    setPlayer('playerTwo')
                    setHasWon(true)
                    return
                }
            }

        }
        if (allSymbols.length) {
            winningHandler(allSymbols)
        }
        console.log(allSymbols)
    }, [allSymbols])

    return (
        <GameContext.Provider value={{ setHasWon, hasWon, allSymbols, setAllSymbols, player, setPlayer }}>
            {children}
        </GameContext.Provider>
    )
}