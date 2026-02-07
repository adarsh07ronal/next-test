import { gql } from "graphql-request";

const getVideoComments = gql`
  query getVideoComments($id: ID!, $first: Int, $after: String) {
    videoComments(id: $id, first: $first, after: $after) {
      allCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          id
          contents
          user {
            id
            name
            avatar
          }
          createdAt
          likeNum
        }
      }
    }
  }
`;

export default getVideoComments;
