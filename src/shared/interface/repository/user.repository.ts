import { UserEntity } from '../../../domain/user/user.entity'
import { RepositoryInterface } from './repository.interface'

export interface UserRepository extends RepositoryInterface<UserEntity> {
  findByEmail(email: string): Promise<UserEntity>
  emailExists(email: string): Promise<void>
}
