
import { Provider } from 'react-redux';
import store from './components/store/store';
import Ex1 from './components/Ex1'
import Ex2 from './components/Ex2'
import Ex3 from './components/Ex3'
import Ex4 from './components/Ex4'
import Ex5 from './components/Ex5'
import Ex6 from './components/Ex6'
import  Ex7 from './components/Ex7'
import Ex8 from './components/Ex8'
export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Ex1/>
        <Ex2/>
        <Ex3/>
        <Ex4/>
        <Ex5/>
        <Ex6/>
        <Ex7/>
        <Ex8/>
      </Provider>
    </div>
  )
}




