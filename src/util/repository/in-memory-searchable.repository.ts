import { SearchableRepositoryInterface } from '../../shared/interface/repository/searchable.repository'
import { Entity } from '../entity/entity'
import { InMemoryRepository } from './in-memory-repository'

export abstract class InMemorySearchableRepository<E extends Entity>
  extends InMemoryRepository<E>
  implements SearchableRepositoryInterface<E, any, any>
{
  search(props: any): Promise<any> {
    throw new Error('Method not implemented.')
  }
}
