import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        username
    }
  }
}
`;


export const SAVE_CARD = gql`
  mutation saveCard($input: CardInput!) {
    saveCard(cardData: $input) {
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

export const REMOVE_CARD = gql`
    mutation removeCard($cardId: ID!) {
        deleteCard(cardId: $cardId) {
        email
        cardCount
        savedCardss {
                cardId
                description
                title
                image
                link
        }
        }
    }
`;

