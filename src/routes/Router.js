import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Update from "../components/Masters/Update.js";
import Home from "../components/Masters/Home.js";
import Home1 from "../components/Masters/Home1.js";
import Update1 from "../components/Masters/Update1.js";


/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
/****End Layouts*****/

// /*****Pages******/
// const Dashboard1 = lazy(() => import("../views/dashboards/Dashboard1.js"));

// form Transactions
const Bank = lazy(() => import("../components/Masters/Bank.js"));
const Company = lazy(() => import("../components/Masters/Company.js"));
const Customer = lazy(() => import("../components/Masters/Customer.js"));
const PorductCategory = lazy(() =>
  import("../components/Masters/ProductCategory.js")
);
const Product = lazy(() => import("../components/Masters/Product.js"));
const Supplier = lazy(() => import("../components/Masters/Supplier.js"));
const UOM = lazy(() => import("../components/Masters/UOM.js"));
const Users = lazy(() => import("../components/Masters/Users.js"));

// form transacations
const Buyer = lazy(() => import("../components/Transactions/Buyer.js"));
const SupplierTransacations = lazy(() =>
  import("../components/Transactions/Supplier.js")
);

const Create = lazy(() => import("../components/Masters/Create.js"));
const Create1 = lazy(() => import("../components/Masters/Create1.js"));


/*****Routes******/
const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/masters/Bank" /> },
      // { path: "dashboards/dashboard1", exact: true, element: <Dashboard1 /> },
      { path: "/masters/Bank", element: <Bank /> },
      { path: "/masters/Company", element: <Company /> },
      { path: "/masters/Customer", element: <Customer /> },
      { path: "/masters/Home", element: <Home /> },
      { path: "/masters/Home1", element: <Home1 />},
      { path: "/masters/ProductCategory", element: <PorductCategory /> },
      { path: "/masters/Product", element: <Product /> },
      { path: "/masters/Supplier", element: <Supplier /> },
      { path: "/masters/UOM", element: <UOM /> },
      { path: "/masters/Users", element: <Users /> },
      { path: "/transacation/Buyer", element: <Buyer /> },
      {
        path: "/transacation/SupplierTransacations",
        element: <SupplierTransacations />,
      },
      { path: "/Create", element: <Create />  },
      { path: "/Update", element: <Update />},
      { path: "/Create1", element: <Create1 />},
      { path: "/Update1", element: <Update1 />},
    ],
  },
];

export default ThemeRoutes;
