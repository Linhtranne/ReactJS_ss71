
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "./store/reducers/favorite";

interface Account {
  id: number;
  name: string;
  favorite: boolean;
}

const Ex7 = () => {
  const accounts = useSelector((state: any) => state.accounts.accounts);
  const dispatch = useDispatch();

  const handleFavoriteToggle = (accountId: number) => {
    dispatch(toggleFavorite(accountId));
  };

  return (
    <div>
      <h2>Account List</h2>
      <ul>
        {accounts.map((account: Account) => (
          <li key={account.id}>
            {account.name}
            <button onClick={() => handleFavoriteToggle(account.id)}>
              {account.favorite ? "Unfavorite" : "Favorite"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ex7;
