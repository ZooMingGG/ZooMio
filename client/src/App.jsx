import { AppLayout } from './layouts/AppLayout';
import { AuthLayout } from './layouts/AuthLayout';

const App = () => {
  const isAuthenticated = false;

  return isAuthenticated ? <AppLayout /> : <AuthLayout />;
}

export { App };
