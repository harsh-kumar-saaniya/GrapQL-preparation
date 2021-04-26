let crypto = require('crypto');
let localData = {};

const resolver = {
    Query: {
        getMessage: () => {
            return "Hello world!"
        },
        getName: () => {
            return "Harish Kumar"
        },
        getAllMessags: () => {
            return [{ message: "test", id: "1235" }, { message: "test", id: "1235" }]
        }
    },

    Mutation: {
        createMessage: (_, { input }) => {
            console.log("inputs", input);
            let id = crypto.randomBytes(10).toString('hex')
            console.log("id", id)
            localData[id] = { id, ...input.message }
            return { id, ...input };
        }
    }
}

module.exports = resolver;