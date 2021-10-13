import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
  useLocation,
  withRouter,
  BrowserRouter as Router,
} from 'react-router-dom';
import routes from './routes';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login } from './containers';
function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);
const App = () => {
  const isAuth = useSelector(state => state.user.isAuthenticated);
  const [locationKeys, setLocationKeys] = useState([]);
  const history = useHistory();
  useEffect(() => {
    return history.listen(location => {
      if (history.action === 'PUSH') {
        setLocationKeys([location.key]);
      }

      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys);

          window.location.reload();
        } else {
          setLocationKeys(keys => [location.key, ...keys]);
        }
      }
    });
  }, [locationKeys, history]);

  return (
    <ScrollToTop>
      <Router>
        <Switch>
          {isAuth ? (
            routes.map(route => (
              <Route key={route.path} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))
          ) : (
            <Login />
          )}
        </Switch>
      </Router>
    </ScrollToTop>
  );
};

const AppWithRouter = withRouter(App);

export default AppWithRouter;
