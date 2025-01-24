import {
  type Attributes,
  type CountOptions,
  type CreateOptions,
  type DestroyOptions,
  type FindOptions,
  type Model,
  type ModelStatic,
  type UpdateOptions,
} from "sequelize";
import { ModelCtor } from "sequelize-typescript";
import { BaseRepositoryI } from "types/baseRepositoryInterface";
import {
  type Col,
  type Fn,
  type Literal,
  type MakeNullishOptional,
} from "sequelize/types/utils";

export abstract class BaseRepository<T extends Model> {
  constructor(private model: ModelStatic<T>) {}

  async create(
    data: MakeNullishOptional<T["_creationAttributes"]>,
    options?: CreateOptions<Attributes<T>> | undefined
  ): Promise<T> {
    return this.model.create(data, options);
  }

  async findAll(): Promise<T[]> {
    return await this.model.findAll();
  }

  async findById(id: string): Promise<T | null> {
    return await this.model.findByPk(id);
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    const foundId = await this.model.findByPk(id);

    await foundId?.update(data);

    return foundId;
  }

  async delete(id: string): Promise<boolean> {
    const foundId = await this.model.findByPk(id);

    await foundId?.destroy();

    return true;
  }
}
