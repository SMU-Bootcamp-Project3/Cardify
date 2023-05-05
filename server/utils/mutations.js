import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser() {
        token
        user
    }
`
export const ADD_USER = gql`
    mutation addUser() {
        token
        user
    }
`

export const SAVE_CARD = gql`
    mutation saveCard() {
        _id
        username
        email
        cardCount
        savedCards
    }`

export const REMOVE_CARD = gql`
    mutation removeCard() {
        _id
        username
        email
        cardCount
        savedCards
    }`