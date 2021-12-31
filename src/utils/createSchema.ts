import { buildSchema } from 'type-graphql';

import { UserResolver } from '../resolvers/UserResolver';
import { OfferResolver } from '../resolvers/OfferResolver';
import { OffersResolver } from '../resolvers/OffersResolver';
import { LoginResolver } from '../resolvers/user/login/LoginResolver';
import { RegisterResolver } from '../resolvers/user/register/RegisterResolver';
export const createSchema = () => buildSchema({
  resolvers: [
    UserResolver,
    OfferResolver,
    OffersResolver,
    LoginResolver,
    RegisterResolver,
  ],
  emitSchemaFile: true,
});
