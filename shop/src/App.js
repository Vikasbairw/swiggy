import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainOutLet from "./MainOutLet/MainOutLet";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Admin from "./Admin_swiggy/Admin";
import CategoryView from "./Admin_swiggy/CategoryView";
import List_Food from "./Admin_swiggy/List_Food";
import AdminImg from "./Admin_swiggy/AdminImg";
import Edit from "./Admin_swiggy/Edit";
import CategoryAdd from "./Admin_swiggy/CategoryAdd";
import FoodCategoryView from "./Admin_swiggy/FoodcategoryView";
import Login from "./pages/Profile/Login";
import SingUp from "./pages/Profile/SingUp";


function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <MainOutLet />,
      children: [
        {
          path: "",
          element: <Home />
        },


      ]
    }, {
      path: "/cart/:id",
      element: <Cart />
    }
    ,
    {
      path: "/admin",
      element: <Admin />,
      children: [
        {
          path: '',
          element: <AdminImg />
        },

        {
          path: "/admin/view",
          element: <CategoryView />
        },
        {
          path: '/admin/addcategory',
          element: <CategoryAdd />
        }, {
          path: '/admin/addcategory/view',
          element: <FoodCategoryView />
        },
        {
          path: '/admin/add',
          element: <List_Food />
        },
        {
          path: "/admin/edit/:id",
          element: <Edit />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    }, {
      path: "/singup",
      element: <SingUp />
    }


  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
