import React from "react";

interface CounterProps {
    count: number,
    buttonClickEmiter: () => void;
}

const CounterComponent = ({ count, buttonClickEmiter }: CounterProps) => {
    return (
        <>
            <div>count: {count}</div>
            <button onClick={buttonClickEmiter}>+1</button>
        </>
    );
}

export default CounterComponent;
