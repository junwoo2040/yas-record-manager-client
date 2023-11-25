import { GraphQLClient } from "graphql-request";
import { QueryClient } from "@tanstack/react-query";

// GraphQL Request Client
const requestHeaders = {
  authorization: "TOKEN",
};

export const graphQLRequestClient = new GraphQLClient(
  "http://localhost:8000/graphql" as string,
  {
    headers: requestHeaders,
  }
);

// React Query Client
export const queryClient = new QueryClient();
