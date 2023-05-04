

import  {gql} from 'graphql-tag';

export const GET_ME = gql`
query Me {
    me {
      _id
      username
      email
      cardCount
      savedCards {
        cardId
        description
        title
        image
        link
      }
    }
  }
`;
