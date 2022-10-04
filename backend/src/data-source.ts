import "reflect-metadata";
import { DataSource } from "typeorm";
import { ExampleEntity } from "./ExampleEntity";

// Create a data source
export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "test",
	password: "test",
	database: "test",
	synchronize: true,
	logging: false,
	entities: [ExampleEntity],
	migrations: [],
	subscribers: [],
});
