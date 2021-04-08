const express = require('express');
// 定义我们的查询 buildSchema  Model 
const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const userSchema
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

const app = express();