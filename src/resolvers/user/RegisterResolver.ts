import { Arg, Mutation, Resolver } from 'type-graphql';
import bcrypt from 'bcrypt';
import { getManager } from 'typeorm';
import { User } from '../../entity/User';
import { UserStatus } from '../../constants/UserStatus';
import { RegisterInput } from './RegisterInput';


@Resolver()
export class RegisterResolver {
  @Mutation(() => User)
  async register(
    @Arg('data') data: RegisterInput,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(data.password, 12);
    const user = User.create();
    user.name = data.name;
    user.email = data.email;
    user.password = hashedPassword;
    user.status = UserStatus.PENDING;
    user.date_added = Date.now() / 1000;
    user.descriptions = '';
    user.advertiser_manager_id = 0;
    user.origin_id = 0;
    user.website = '';
    user.tags = '';

    try {
      await getManager().transaction(async (transactionalEntityManager) => {
        const advertiser = await transactionalEntityManager.save(user);
        console.log(advertiser);
      });

      return user;
    } catch (error: any) {
      console.error(error.message, error.stack);
      throw error;
    }
  }
}
