import { Admin, Resource } from "react-admin";

import { dataProvider } from "./dataProvider";
import products from "./products";
import orders from "./orders";
import customers from "./customers";
import { Dashboard } from "./Dashboard";

export const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="orders" {...orders} />
    <Resource name="customers" {...customers} />
    <Resource name="products" {...products} />
  </Admin>
);
