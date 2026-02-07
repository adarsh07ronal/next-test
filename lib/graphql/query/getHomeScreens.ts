import { gql } from "graphql-request";

const getHomeScreens = gql`
  query getHomeScreens {
    homeScreens {
      id
      category {
        id
        name
      }
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

export default getHomeScreens;
