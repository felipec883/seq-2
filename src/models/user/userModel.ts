import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  HasMany,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Task } from "models/task/taskModel";
@Table({ tableName: "user" })
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  id!: number;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  password!: string;

  @Column(DataType.STRING)
  role!: string;

  @HasMany(() => Task)
  tasks!: ReturnType<() => Task[]>;
}
