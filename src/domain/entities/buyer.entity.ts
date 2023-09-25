import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "buyers" })
export class Buyer {
	@PrimaryGeneratedColumn("uuid")
	id: number;

	@Column("text", { unique: true, nullable: false })
	username: string;

	@Column("text", { nullable: false })
	firstName: string;

	@Column("text", { nullable: false })
	lastName: string;

	@Column("text", { unique: true, nullable: false })
	email: string;

	@Column("number", { unique: true, nullable: false })
	cpf: number;

	@Column({ nullable: false, select: false, length: 30 })
	password: string;

	@Column("text", { nullable: false })
	phone: string;

	@Column("text", { nullable: false })
	address: string;

	@Column("date", { nullable: false })
	createdAt: Date;

	@Column("date", { nullable: false })
	updatedAt: Date;

	@Column("date", { nullable: true })
	deletedAt: Date;
}