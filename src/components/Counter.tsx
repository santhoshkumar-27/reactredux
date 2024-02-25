import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from '../store/reducers/counter';


const Counter = () => {
    const [manualInputAmount, setManualInputAmount] = useState(0);

    const addValue = Number(manualInputAmount) || 0;
    console.log('addValue', addValue);
    const counter = useSelector((state: any) => state.counter.count)
    const dispatch = useDispatch()

    const resetState = () => {
        setManualInputAmount(0);
        dispatch(reset())
    }

    const addToState = () => {
        dispatch(incrementByAmount(addValue))
    }
    return (
        <>
            <div>Counter: {counter}</div>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div>
                <input type="number" value={manualInputAmount} onChange={(event) => setManualInputAmount(+event.target.value)} />
            </div>
            <div>
                <button onClick={() => addToState()}>Add to store</button>
                <button onClick={() => resetState()}>reset</button>
            </div>
        </>
    )
}

export default Counter