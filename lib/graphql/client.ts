import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(
  "https://develop.api.samansa.com/graphql",
  {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  }
);
