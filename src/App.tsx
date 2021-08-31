import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./screens/Home";
import { Schedule } from "./screens/Schedule";

export const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/schedule" component={Schedule} />
      </Switch>
    </Router>
  );
};
