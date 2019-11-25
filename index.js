import fs from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { resolvers } from './graphql/resolvers';

const typeDefs = fs
  .readFileSync(path.join(__dirname, 'graphql/schema.graphql'))
  .toString();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(3000).then(({ url }) => {
  console.log(`rodando ${url}`);
});
