import { UserValidatorFactory } from '../../external/lib/class-validator/user-validator'
import { EntityValidationError } from '../../shared/error/validation-error'
import { UserProps } from '../../shared/interface/user/user-props.interface'
import { Entity } from '../../util/entity/entity'

export class UserEntity extends Entity<UserProps> {
  constructor(public readonly props: UserProps, id?: string) {
    UserEntity.validate(props)
    super(props, id)
    this.props.createdAt = this.props.createdAt ?? new Date()
  }

  get name() {
    return this.props.name
  }

  private set name(value: string) {
    this.props.name = value
  }

  get email() {
    return this.props.email
  }

  private set email(value: string) {
    this.props.email = value
  }

  get password() {
    return this.props.password
  }

  private set password(value: string) {
    this.props.password = value
  }

  get createdAt() {
    return this.props.createdAt
  }

  update(value: string): void {
    UserEntity.validate({
      ...this.props,
      name: value,
    })
    this.name = value
  }

  updatePassword(value: string): void {
    UserEntity.validate({
      ...this.props,
      password: value,
    })
    this.password = value
  }

  static validate(props: UserProps) {
    const validator = UserValidatorFactory.create()
    const isValid = validator.validate(props)
    if (!isValid) {
      throw new EntityValidationError(validator.errors)
    }
  }
}
