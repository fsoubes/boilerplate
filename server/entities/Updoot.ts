import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";
import { ObjectId } from "mongodb";

@ObjectType()
export class Updoot {
  @Field()
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  title: String;

  @Field({ nullable: true })
  @Property()
  description?: string;
}

export const UpdootModel = getModelForClass(Updoot);
