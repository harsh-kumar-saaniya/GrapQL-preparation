
const resolver = {
    Query: {
        getMessage: () => {
            return "Hello world!"
        },
        getName: () => {
            return "Harish Kumar"
        }
    },

    Mutation: {

    }
}

module.exports = resolver;