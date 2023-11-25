import { FC } from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@utils/clients";

import App from "./App";

const Wrapper: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

export default Wrapper;
