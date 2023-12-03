import { UserEntity } from '../../../domain/user/user.entity'
import { SearchableRepositoryInterface } from './in-memory-searchable.repository'

export interface UserRepository
  extends SearchableRepositoryInterface<UserEntity, any, any> {
  findByEmail(email: string): Promise<UserEntity>
  emailExists(email: string): Promise<void>
}
