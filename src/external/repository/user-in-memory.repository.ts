import { UserEntity } from '../../domain/user/user.entity'
import { ConflictError } from '../../shared/error/conflict-error'
import { NotFoundError } from '../../shared/error/not-found-error'
import { UserRepository } from '../../shared/interface/repository/user.repository'
import { InMemoryRepository } from '../../util/repository/in-memory-repository'
import { InMemorySearchableRepository } from '../../util/repository/in-memory-searchable.repository'

export class UserInMemoryRepository
  extends InMemorySearchableRepository<UserEntity>
  implements UserRepository
{
  async findByEmail(email: string): Promise<UserEntity> {
    const entity = this.items.find(item => item.email === email)
    if (!entity) {
      throw new NotFoundError(`Entity not found using email ${email}`)
    }
    return entity
  }

  async emailExists(email: string): Promise<void> {
    const entity = this.items.find(item => item.email === email)
    if (entity) {
      throw new ConflictError('Email address already used')
    }
  }
}
