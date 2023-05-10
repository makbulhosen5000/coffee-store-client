import { createBrowserRouter } from "react-router-dom";

import UpdatedCoffee from "../Pages/UpdatedCoffee";
import App from '../App';
import AddCoffee from "../Pages/AddCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "addCoffee",
    element: <AddCoffee />,
  },
  {
    path: 'updateCoffee/:id',
    element: <UpdatedCoffee />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/coffee/${params.id}`),
  },
]);
export default router;