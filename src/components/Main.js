import { Route, Switch ,Redirect } from "react-router-dom";
import Welcome from "../pages/welcome";
import Products from "../pages/Poducts";
import ProductsDeatails from "../pages/productDetail";

const Main = () => {
  return (
    <main className="main">
      <switch>
        <Route path="/" exact>
          <Redirect to="/Welcome"/>
        </Route>
        <Route path="/Welcome">
          <Welcome />
        </Route>
        <Route path="/Products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductsDeatails />
        </Route>
      </switch>
    </main>
  );
};

export default Main;
