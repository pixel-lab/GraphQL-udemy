import { GraphQLServer } from "graphql-yoga";

//Type Definition (schema)

// String // Boolean // Int // Float // ID 
const typeDefs = `
    type Query  {
       me: User!,
       post: blog!,
    },

    type User {
        id: ID!,
        name : String!,
        email: String!,
        age: Int
    }
    type blog {
        id: ID!,
        title : String!,
        body: String!,
        isPublished: Boolean!
    }
`
const resolvers = {
    Query :{
        me() {
            return {
                id: 'abc-123',
                name : 'Sankha Banerjee',
                email: 'sankhabanerjee92@gmail.com',
                age: 32  
            }
        },
        post() {
            return {
                id: 'abc-134',
                title : 'Lorem Ipsum is a simple dummy text',
                body: 'Hope is good thing, maybe the best thing, no good thing ever dies',
                isPublished: true
            }
        }
    }
}
//Resolvers

const server = new GraphQLServer({typeDefs, resolvers});

server.start(() => {console.log('server is listening')});