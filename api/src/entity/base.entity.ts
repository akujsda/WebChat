import { BaseEntity } from "typeorm";
import { UniqueConstraintError } from "../errors/unique-constraint.error";

export class EnhancedBaseEntity extends BaseEntity {

  async save(): Promise<this> {
    try {
      return await super.save()
    } catch (error) {
      if (UniqueConstraintError.is(error)) {
        throw new UniqueConstraintError(error)
      }

      throw error
    }
  }
}
