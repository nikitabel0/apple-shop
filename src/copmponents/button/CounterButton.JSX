

const CounterButton = ({count,setCount}) => {
 

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <button onClick={decrement}>-</button>
            <span style={{ margin: '0 10px' }}>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default CounterButton;