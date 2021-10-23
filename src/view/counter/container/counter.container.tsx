import React, { ReactElement } from 'react';
import CounterComponent from '_/view/counter/component/counter.component';
import { increment, selectCount } from '_/view/counter/counter.store';
import { useAppDispatch, useAppSelector } from '_/view/hook';

const CounterContainer = (): ReactElement => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectCount);

    const onButtonClickAction = () => {
        dispatch(increment());
    }

    return (
        <CounterComponent
            count={count}
            buttonClickEmiter={onButtonClickAction}
        />
    );
}

export default CounterContainer;
