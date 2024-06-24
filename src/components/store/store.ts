import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/count';
import randomReducer from './reducers/randomCount'
import themeReducer from './reducers/theme'
import displayReducer from './reducers/display'
import menuReducer from './reducers/menu'
import selectReducer from './reducers/select'
import favoriteReducer from './reducers/favorite'
import accountReducer from './reducers/account'

export default configureStore({
  reducer: {
    counter: counterReducer,
    randomNumber:randomReducer,
    theme: themeReducer,
    display: displayReducer,
    menu: menuReducer,
    select: selectReducer,
    favorite: favoriteReducer,
    account: accountReducer
  }
  
});
