import { BaseProps } from "../types";
import { useState } from "react";

// Bad solution, but it works
// let currentCount = 0;

export default function StateDemo1({ title }: BaseProps) {
    const [count, setCount] = useState(0);
    //currentCount = count;
    return (
        <>
            <h2>{title}</h2>
            <button
                onClick={() => {
                    setCount((prev) => prev + 1);
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    setCount((prev) => prev - 1);
                }}
            >
                {" "}
                Decrement
            </button>
            <h3>{count}</h3>
        </>
    );
}

{
    /* <>
    <h2>{title}</h2>
    <button
        onClick={() => {
            setCount(prev => prev + 1);
            setCount(prev => prev + 1);
            setCount(prev => prev + 1);
        }}
    >
        Increment
    </button>
    <button
        onClick={() => {
            setCount(count - 1);
        }}
    >
        {" "}
        Decrement
    </button>
    <h3>{count}</h3>
</>; */
}
