import { Redirect, Route, Switch } from "react-router-dom";
import Layout from './components/UI/Layout/Layout';
import Cocktails from './containres/Cocktails/Cocktails';
import NewCocktail from './containres/newCocktail/NewCocktail';
import CocktailInfo from './containres/CocktailInfo/CocktailInfo';
import Register from "./containres/Register/Register";
import Login from "./containres/Login/Login";

const App = () => {

  // const user = useSelector(state => state.users.user);

  // const ProtectedRoute = ({ isAllowed, redirectTo, ...props }) => {
  //   return isAllowed ?
  //     <Route {...props} /> :
  //     <Redirect to={redirectTo} />
  // };

  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Cocktails} />
        {/* <ProtectedRoute
          path="/products/new"
          component={NewProduct}
          isAllowed={user?.role === 'admin'}
          redirectTo="/login"
        /> */}
        <Route path="/cocktails/new" component={NewCocktail} />
        <Route path="/cocktails/id" component={CocktailInfo} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Layout>
  );
}

export default App;
