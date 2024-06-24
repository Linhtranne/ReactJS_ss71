
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './store/reducers/theme';

function Ex3() {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>{theme === 'light' ? 'Light' : 'Dark'}</h1>
      <button onClick={() => dispatch(toggleTheme())}>Theme</button>
    </div>
  );
}

export default Ex3;
