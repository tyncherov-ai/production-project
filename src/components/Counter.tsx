import React, { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className={classes.block}>
            <h1>{count}</h1>
            <button onClick={increment} className={classes.button}>increment</button>
            <button onClick={decrement} className={classes.button}>decrement</button>
        </div>
    )
}
