import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// Creates an entity
@Entity()
export class ExampleEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	stringColumn: string;

	@Column()
	boolColumn: boolean;
}