import {
  Ctx, Query, Resolver, UseMiddleware,
} from 'type-graphql';
import { User } from '../../entity/User';

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async currentUser(
    @Ctx() { payload }:any,
  ): Promise<User | null> {
    console.log('payload:', payload)
    const user = await User.findOne(payload!.userId);
    // const user = await User.findOne(2492);

    if (!user) {
      return null;
    }

    return user;
  }
}
