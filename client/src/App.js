import { Link, Route, Switch } from "react-router-dom";
import Home from "./home";
import Intro from "./user";

function App() {
  return (
    <div>
      <Link to="/intro">go Intro</Link><br/>
      <Link to="/home">go Home</Link>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/intro" component={Intro} />
      </Switch>
    </div>
  );
}

export default App;
