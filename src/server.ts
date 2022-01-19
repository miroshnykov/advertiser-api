import consola from 'consola';
import 'reflect-metadata';
import 'dotenv/config';
import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';
import Express from 'express';
import { createConnection } from 'typeorm';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { createSchema } from './utils/createSchema';
import { GqlContext } from './types/GqlContext';
import pjson from '../package.json';
import { getBuildInfo } from './utils/getBuildInfo';

declare module 'express-session' {
  export interface Session {
    userId: number
  }
}

async function main() {
  const schema = await createSchema();
  try {
    await createConnection();
  } catch (error: any) {
    consola.error(error.message, error.stack);
    process.exit(1);
  }
  const serverConfig: { schema: GraphQLSchema; context: any } = {
    schema,
    context: ({ req, res }: GqlContext) => ({ req, res }),
  };

  const server = new ApolloServer(serverConfig as ApolloServerExpressConfig);
  const app = Express();

  app.use(cookieParser());

  app.use(cors({
    credentials: true,
    origin: '*',
  }));

  app.get('/health', getBuildInfo(pjson.version));

  try {
    server.applyMiddleware({ app, path: '/graphql' });
  } catch (error: any) {
    consola.error(error.message, error.stack);
  }
  const PORT = process.env.NODE_PORT || 4009;
  app.listen(PORT, () => {
    consola.info(`server is running on PORT http://localhost:${PORT}${server.graphqlPath}`);
  });
}

main().catch((error) => {
  consola.log(error, 'error');
});
