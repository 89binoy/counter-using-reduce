import { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  switch (action){

    case 'increment-1': {
      return state + 1;
    }

    case 'decrement-1': {
      return state - 1;
    }

    case 'increment-10': {
      return state + 10;
    }

    case 'decrement-10': {
      return state - 10;
    }

    default: {
      return state;
    }
  }

}

const initState = 0;

function App() {

  const [state,dispatch] = useReducer( reducer, initState );

  return (
    <div className="App">
      <div class='counter-1'>
        <p>The value of the counter is: {state}</p>
        <button onClick={()=> dispatch('increment-10')}>Increase 10</button>
        <button onClick={()=> dispatch('increment-1')}>Increase 1</button>
        <button onClick={()=> dispatch('decrement-1')}>Decrease 1</button>
        <button onClick={()=> dispatch('decrement-10')}>Decrease 10</button>
        



      </div>
    </div>
  );
}

export default App;
