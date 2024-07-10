import { lazy } from "react";
import { Navigate } from "react-router-dom";
// import Create_Bank from "../components/Masters/Create_Bank.js";
// import Update_Bank from "../components/Masters/Update_Bank.js";

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
const Create_Bank = lazy(() => import("../components/Masters/Create_Bank"));
const Update_Bank = lazy(() => import("../components/Masters/Update_Bank"));


// form transacations
const Buyer = lazy(() => import("../components/Transactions/Buyer.js"));
const SupplierTransacations = lazy(() =>
  import("../components/Transactions/Supplier.js")
);

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
      { path: "/masters/ProductCategory", element: <PorductCategory /> },
      { path: "/masters/Product", element: <Product /> },
      { path: "/masters/Supplier", element: <Supplier /> },
      { path: "/masters/UOM", element: <UOM /> },
      { path: "/masters/Users", element: <Users /> },
      { path: "/masters/Create_Bank", element: <Create_Bank /> },
      { path: "/masters/Update_Bank/:id", element: <Update_Bank /> },
      { path: "/transacation/Buyer", element: <Buyer /> },
      {
        path: "/transacation/SupplierTransacations",
        element: <SupplierTransacations />,
      },
    ],
  },
];

export default ThemeRoutes;
