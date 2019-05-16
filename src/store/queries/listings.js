import gql from 'graphql-tag';

export const GET_LISTINGS = () => gql`
    {
        listings {
            _id
            address
            area
            city
            price
            details
            images
        }
    }
`

export const GET_LISTING = (id, fields = 'address area city price details images') => gql`
    {
        listing(_id: "${id}") {
            ${fields}
        }
    }
`