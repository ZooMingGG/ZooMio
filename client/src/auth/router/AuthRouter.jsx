import { Switch, Route, Redirect } from 'react-router-dom';
import { SignIn, SignUp, ForgotPassword } from '../components';
import { paths } from './paths';

const AuthRouter = () => {
  return (
    <Switch>
      <Route path={paths.signIn} component={SignIn} exact={true} />
      <Route path={paths.signUp} component={SignUp} exact={true} />
      <Route path={paths.forgotPassword} component={ForgotPassword} />
      <Redirect to={paths.signIn} />
    </Switch>
  );
}

export { AuthRouter };
