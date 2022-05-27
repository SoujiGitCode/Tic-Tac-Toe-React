import Square from "./Square";
import { useState} from "react";

const Board = () =>{

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true)

    const play = (i) =>{
        if(calculateWinner(squares) || squares[i] ) {
            return null
        }
        squares[i] = isX ? "X" : "0"
        setSquares(squares)
        setIsX(!isX)
    }


    function calculateWinner (squares){
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < winConditions.length; i++) {
            const [a, b, c] = winConditions[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null
    }

    const winner = calculateWinner(squares)

  function restart(){
        setSquares(Array(9).fill(null))
        setIsX(true)
    }

    return(
        <div className="board">
            <div className={"restart-wrap"}>
                <button onClick={()=>restart()}
                        className={"restart"}
                >
                    Restart
                </button>
            </div>


            <div className={"board-row"}>
                <Square value={squares[0]} play={()=>play(0)} />
                <Square value={squares[1]} play={()=>play(1)} />
                <Square value={squares[2]} play={()=>play(2)} />
            </div>
            <div className={"board-row"}>
                <Square value={squares[3]} play={()=>play(3)} />
                <Square value={squares[4]} play={()=>play(4)} />
                <Square value={squares[5]} play={()=>play(5)} />
            </div>
            <div className={"board-row"}>
                <Square value={squares[6]} play={()=>play(6)} />
                <Square value={squares[7]} play={()=>play(7)} />
                <Square value={squares[8]} play={()=>play(8)} />
            </div>

            <div className={"status"}>
                {winner ? `Winner: ${winner}` : `Next Move: ${isX ? `X` : `O`}`}
            </div>

        </div>

    )
}

export default Board