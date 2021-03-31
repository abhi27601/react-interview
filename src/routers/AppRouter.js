import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={RepositoriesList} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);
export default AppRouter;
