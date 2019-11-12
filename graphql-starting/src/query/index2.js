import { GraphQLServer } from "graphql-yoga";

//Type Definition (schema)

// String // Boolean // Int // Float // ID 
const typeDefs = `
    type Query  {
        employeeid: ID!,
        employeename : String!,
        employeage : Int!,
        employeemarried: Boolean!,
        employeectc:Float!
    }
`
const resolvers = {
    Query :{
        employeeid() {
            return 'abc-123'
        },
        employeename() {
            return 'Sankha Banerjee'
        },
        employeage() {
            return 32
        },
        employeemarried () {
            return true
        },
        employeectc() {
            return 4.002
        }
    }
}
//Resolvers

const server = new GraphQLServer({typeDefs, resolvers});

server.start(() => {console.log('server is listening')});