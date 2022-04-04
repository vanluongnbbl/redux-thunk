import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import HookIceScreamContainer from './components/HookIceScreamContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <HookCakeContainer />
        <HookIceScreamContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
