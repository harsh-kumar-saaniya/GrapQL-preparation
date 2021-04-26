const { gql } = require('apollo-server');

const typeDef = gql`
type messageType{
    message: String
}

input messageInput{
    message: String
}

type Mutation{
    createMessage(input:messageInput): messageType
}

type Query{
    getMessage: String
    getName: String
}
`

module.exports = typeDef;