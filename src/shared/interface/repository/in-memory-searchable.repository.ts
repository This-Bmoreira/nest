import { Entity } from '../../../util/entity/entity'
import { RepositoryInterface } from './repository.interface'

export interface SearchableRepositoryInterface<
  E extends Entity,
  SearchInput,
  SearchOutput,
> extends RepositoryInterface<E> {
  search(props: SearchInput): Promise<SearchOutput>
}
