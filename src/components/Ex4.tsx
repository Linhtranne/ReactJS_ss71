
import { useSelector, useDispatch } from 'react-redux';
import { toggleDisplayMode } from './store/reducers/display';

function Ex4() {
  const mode = useSelector((state) => state.displayMode.mode);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(toggleDisplayMode())}>
        {mode === 'list' ? 'Grid mode' : 'List mode'}
      </button>
      <div style={{ display: mode === 'list' ? 'block' : 'grid', gap: '10px' }}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
}

export default Ex4;
