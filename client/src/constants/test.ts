import { PaginationResponse } from "../generated/graphql";

export const test = [
  {
    getArticles: {
      keyArgs: [],
      merge(
        existing: PaginationResponse | undefined,
        incoming: PaginationResponse
      ): PaginationResponse {
        return {
          ...incoming,
          edges: [...(existing?.edges || []), ...incoming.edges],
        };
      },
    },
  },
];
