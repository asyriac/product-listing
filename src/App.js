import { Route, Switch } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={ProductListPage} />
      </Switch>
    </div>
  );
}

export default App;
