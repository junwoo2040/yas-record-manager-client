import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@utils/clients";

import App from "@pages/App.page";
import Login from "@pages/Login.page";
import Request from "@pages/Request.page";

const router = createBrowserRouter([
  {
    path: "app",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "request",
    element: <Request />,
  },
]);

const Wrapper: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default Wrapper;
