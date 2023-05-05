import { gql } from '@apollo/client';

export const QUERY_NAME = gql`
    query user {
        User {
            _id: ID
            username: String
            email: String
            cardCount: Int
            savedCards: [Book]
        }
    }
`;