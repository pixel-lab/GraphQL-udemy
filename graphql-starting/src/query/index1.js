import { GraphQLServer } from "graphql-yoga";

//Type Definition (schema)

// String // Boolean // Int // Float // ID 
const typeDefs = `
    type Query  {
       hello : String!,
       name : String!
    }
`
const resolvers = {
    Query :{
        hello() {
            return 'Welcome back! graphql query'
        },
        name() {
            return 'Sankha Banerjee'
        }
    }
}
//Resolvers

const server = new GraphQLServer({typeDefs, resolvers});

server.start(() => {console.log('server is listening')});