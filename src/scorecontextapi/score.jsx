import { Fragment } from "react";

const Score = props => (
    <Fragment>
        <p>Name: {props.name}</p>
        <p>score: {props.score}</p>
        <button onClick={props.incrementPrice}>&uarr;</button>
        <button onClick={props.decrementPrice}>&darr;</button>
    </Fragment>
)

export default Score;