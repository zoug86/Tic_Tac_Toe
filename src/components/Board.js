import React from 'react'
import Square from './Square';

import '../styles/Board.css';

const Board = () => {

    return (
        <div className="board">
            {[...new Array(9)].map((sqr, i) => {
                return <Square key={i} dataKey={i} />
            })}
        </div>
    )
}

export default Board
