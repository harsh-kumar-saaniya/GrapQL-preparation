let crypto = require('crypto');
let localData = {};

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
        createMessage: (_, {input}) => {
            console.log("inputs", input);
            let id = crypto.randomBytes(10).toString('hex')
            console.log("id", id)
            localData[id] = { id, ...input.message }
            return { id, ...input };
        }
    }
}

module.exports = resolver;