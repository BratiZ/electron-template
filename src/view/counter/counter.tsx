import React, { ReactElement } from 'react';
import CounterContainer from '_/view/counter/container/counter.container';
import { useAppDispatch } from '_/view/hook';
import { setCounter } from '_/view/counter/counter.store';

const Counter = (): ReactElement => {
    const dispatch = useAppDispatch();

    const init = () => {
        dispatch(setCounter(0));
    }

    init();

    return (
        <CounterContainer/>
    );
}

export default Counter;
