

import  {gql} from '@apollo/client';

export const QUERY_USER = gql`
query Me {
    me {
      _id
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

export const QUERY_ME = gql`
query me {
    me {
      _id
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




