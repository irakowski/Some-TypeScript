import React from "react";

type Props = {
    counter: number
    reset: () => void;
};

const Counter = ({ counter, reset }: Props) => {
    return (
        <div>
            <button onClick={reset}>Reset</button>
            <p className="number">
                Counter: {counter}
            </p>
        </div>
    )
}

export default Counter;