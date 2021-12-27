import { buildSchema } from 'type-graphql';

import { UserResolver } from '../resolvers/UserResolver';
import { OfferResolver } from '../resolvers/OfferResolver';
import { OffersResolver } from '../resolvers/OffersResolver';
export const createSchema = () => buildSchema({
  resolvers: [
    UserResolver,
    OfferResolver,
    OffersResolver,
  ],
  emitSchemaFile: true,
});
