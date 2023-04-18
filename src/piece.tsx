import './App.css';

interface PieceProps {
    cx: number;
    cy: number;
    fill: string;
}
function Piece({cx, cy, fill}: PieceProps) {

    return (
        <circle cx={cx} cy={cy} r="40" fill={fill}/>
    );
}

export default Piece;
