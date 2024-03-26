import { Column, Model, Table, CreatedAt, UpdatedAt, DeletedAt, DataType, Sequelize } from 'sequelize-typescript';

@Table({
  tableName:'Users',
  paranoid: true,
  timestamps: true,
})
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  })
  readonly id: number;

  @Column({
    type: DataType.STRING,
    field:"name"
  })
  readonly name: string;

  @Column({
    type: DataType.STRING,
    validate: { isEmail: true, isLowercase: true },
  })
  readonly email: string;

  @Column({
    type: DataType.STRING,
  })
  readonly password: string;

  @Column({ type: DataType.STRING, field: "role" })
  readonly role: string;

  @Column({ type: DataType.STRING, field: "avatar", allowNull: true })
  readonly avatar?: string;

  @CreatedAt
  @Column({ type: DataType.DATE, field: "created_at" })
  createdAt!: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE, field: "updated_at" })
  updatedAt: Date;

  @DeletedAt
  @Column({ type: DataType.DATE, field: "deleted_at" })
  deletedAt: Date;
}