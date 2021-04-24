import Custom from './components/Custom';
import Pricing from './components/Pricing';
import {Switch, Route} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
      <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>            
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/">
            <Custom/>
          </Route>
        </Switch>
  );
}

export default App;
