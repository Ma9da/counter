import { useState } from 'react';
function App() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>increase (+1)</button>
      <button onClick={() => setCounter(counter + 2)}>increase (+2)</button>
      <div className={counter > 10 ? 'green' : ''}>
        counter: {counter >= 0 ? counter : 0}
        {counter <= 5 && counter > 0 ? <div className='red'>your counter is lower than 5</div> : ""}
      </div>
      <button onClick={() => setCounter(counter - 1)}>decrease (-1)</button>
      <button onClick={() => setCounter(counter - 2)}>decrease (-2)</button>
    </>
  );
}

export default App;
