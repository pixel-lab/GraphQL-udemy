import { GraphQLServer,PubSub } from "graphql-yoga";
import db from './db'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'
import User from './resolvers/User'
import Comment from './resolvers/Comment'
import blog from './resolvers/Post'

const pubsub = new PubSub();
const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers:{
        Query,
        Mutation,
        Subscription,
        User,
        Comment,
        blog
    },
    context:{
        db,
        pubsub
    }
});
server.start(() => {console.log('server is listening')});