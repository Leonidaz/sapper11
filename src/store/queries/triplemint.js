import { gql } from 'apollo-boost';

export const GET_BOOKS = gql`
    {
        book {
            id
            title
        }
    }
`