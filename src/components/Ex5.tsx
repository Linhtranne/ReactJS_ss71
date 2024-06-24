
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from './store/reducers/menu';

const Menu = () => {
  const isExpanded = useSelector((state) => state.menu.isExpanded);
  const dispatch = useDispatch();

  return (
    <div style={{ width: isExpanded ? '200px' : '50px', transition: 'width 0.3s' }}>
      <button onClick={() => dispatch(toggleMenu())}>
        {isExpanded ? 'Thu gọn' : 'Mở rộng'}
      </button>
      <ul style={{ display: isExpanded ? 'block' : 'none' }}>
        <li>Bảng điều khiển</li>
        <li>Tài khoản</li>
        <li>Tài sản</li>
        <li>Thống kê</li>
        <li>Tài liệu</li>
      </ul>
    </div>
  );
};

export default Menu;
