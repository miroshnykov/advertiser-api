import {
  Ctx,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql';
import { Offer } from '../../entity/Offer';
import { GqlContext } from '../../types/GqlContext';
import {auth} from "../../middlewares/auth";

@Resolver()
export class OffersResolver {
  @UseMiddleware(auth)
  @Query(() => [Offer], { nullable: true })
  async getOffers(
    @Ctx() { payload }: GqlContext,
  ): Promise<Offer[]> {
    return Offer.find();
  }
}
