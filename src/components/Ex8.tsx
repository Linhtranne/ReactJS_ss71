import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './store/reducers/account';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(login({ userName, password }));
  };


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
