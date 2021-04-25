const { gql } = require('apollo-server');

const typeDef = gql`
type createMessageType{
    message: String
}

type Mutation{
    createMessage: String
}

type Query{
    getMessage: String
    getName: String
}
`

module.exports = typeDef;