import { buildSchema } from 'type-graphql';

import { UserResolver } from '../resolvers/user/UserResolver';
import { OfferResolver } from '../resolvers/offer/OfferResolver';
import { OffersResolver } from '../resolvers/offer/OffersResolver';
import { LoginResolver } from '../resolvers/user/login/LoginResolver';
import { RefreshResolver } from '../resolvers/user/login/RefreshResolver';
import { RegisterResolver } from '../resolvers/user/register/RegisterResolver';
export const createSchema = () => buildSchema({
  resolvers: [
    UserResolver,
    OfferResolver,
    OffersResolver,
    RefreshResolver,
    LoginResolver,
    RegisterResolver,
  ],
  emitSchemaFile: true,
});
