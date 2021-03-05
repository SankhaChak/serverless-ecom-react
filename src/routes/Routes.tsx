import { Switch, Route } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";
import AdminRoutes from "./AdminRoutes";
import BuyRoutes from "./BuyRoutes";
import OrderRoutes from "./OrderRoutes";

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:id">
          <ProductDetail />
        </Route>
        <Route path="/buy">
          <BuyRoutes />
        </Route>
        <Route path="/orders">
          <OrderRoutes />
        </Route>
        <Route path="/admin">
          <AdminRoutes />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
