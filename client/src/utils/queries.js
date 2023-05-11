

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

export const QUERY_CARDS = gql`
query allCards {
    cards {
      _id
      description
      title
      image
      link
    }
  }
`;

export const QUERY_SINGLE_CARD = gql`
query singleCard($cardId: ID!) {
    card(cardId: $cardId) {
      _id
      description
      title
      image
      link
    }
  }
`;



