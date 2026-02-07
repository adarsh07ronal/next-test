import { gql } from "graphql-request";

const getCategory = gql`
  query getCategory($id: ID!) {
    category(id: $id) {
      id
      name
      videos {
        id
        title
        duration {
          minutes
          seconds
        }
        landscapeThumbnail
      }
    }
  }
`;

export default getCategory;
