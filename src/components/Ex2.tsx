
import { useSelector, useDispatch } from 'react-redux';
import { randomNumber } from './store/reducers/randomCount';

function App() {
  const numbers = useSelector((state) => state.randomNumber.list);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{JSON.stringify(numbers)}</h1>
      <button onClick={() => dispatch(randomNumber())}>Random</button>
    </div>
  );
}

export default App;
