import { GraphQLServer } from "graphql-yoga";
import db from './db'

import Query from './resolvers/Query'
import User from './resolvers/User'
import Mutation from './resolvers/Mutation'
import Comment from './resolvers/Comment'
import blog from './resolvers/Post'

const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers:{
        Query,
        Mutation,
        User,
        Comment,
        blog
    },
    context:{
        db
    }
});

server.start(() => {console.log('server is listening')});