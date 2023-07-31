import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import Header from "./layout/client/Header";
import Footer from "./layout/client/Footer";
import Home from "./features/product/pages/Home";
import ManagementLayout from "./layout/admin/ManagementLayout";
import ProductManagementPage from "./features/product/pages/Management";
import AddProduct from "./features/product/pages/Add";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin",
    element: <ManagementLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <div>Dashboard</div>,
      },
      {
        path: "products",
        element: <ProductManagementPage />,
      },
      {
        path: "products/add",
        element: <AddProduct />,
      },
      {
        path: "products/:id",
        element: <div>Product Detail</div>,
      },
    ],
  },
]);
