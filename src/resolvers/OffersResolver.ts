import {
  Ctx,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql';
import { Offer } from '../entity/Offer';
import { GqlContext } from '../types/GqlContext';

@Resolver()
export class OffersResolver {

  @Query(() => [Offer], { nullable: true })
  async Offers(
    @Ctx() { payload }: GqlContext,
  ): Promise<Offer[]> {
    return Offer.find();
  }
}
