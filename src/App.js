import { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  switch (action){
    case 'increment': {
      return state + 1;

    }

    case 'decrement': {
      return state - 1;


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
        <button onClick={()=> dispatch('increment')}>Increase</button>
        <button onClick={()=> dispatch('decrement')}>Decrease</button>

      </div>
    </div>
  );
}

export default App;
