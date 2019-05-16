import { gql } from 'apollo-boost';

export const GET_BOOK = gql`
    {
        book {
            id,
            title
        }
    }
`