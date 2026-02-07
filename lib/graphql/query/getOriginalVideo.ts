import { gql } from "graphql-request";

const getOriginalVideo = gql`
  query getOriginalVideo($id: ID!) {
    originalVideo(id: $id) {
      title
      description
      landscapeThumbnail
      likeNum
      duration {
        minutes
        seconds
      }
    }
  }
`;

export default getOriginalVideo;
