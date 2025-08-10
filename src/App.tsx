import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./screens/Home"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve("Data loaded"), 1000);
      });
    }
  }
]);

const App = () => {
  return (
    <RouterProvider
      router={router}
    />
  )
};

export default App;


