import {
  Arg, ID, Query, Resolver,
} from 'type-graphql';
import { Offer } from '../../entity/Offer';

@Resolver()
export class OfferResolver {
  @Query(() => Offer, { nullable: true })
  async getOffer(
    @Arg('id', () => ID) id: number,
  ): Promise<Offer> {
    const offer = await Offer.findOneOrFail(id);
    return offer;
  }
}
