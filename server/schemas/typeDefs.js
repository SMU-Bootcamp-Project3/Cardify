const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        cardCount: Int
        savedCards: [Card]
    }

    type Card {
        cardId: ID
        description: String
        title: String
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveCard(cardData: CardInput!): User
        removeCard(cardId: ID!): User
    }
    input CardInput {
        cardId: String
        description: String
        title: String
        image: String
        link: String
    }
`;

module.exports = typeDefs;
