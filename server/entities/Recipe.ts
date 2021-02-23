import { Rate } from "./Rate";
import { Ref } from "./../constant/types";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";
import { ObjectId } from "mongodb";

import { User } from "./User";

@ObjectType()
export class Recipe {
  @Field()
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  title: String;

  @Field({ nullable: true })
  @Property()
  description?: string;

  @Field((_type) => [Rate])
  @Property({ type: () => Rate, default: [] })
  ratings: Rate[];

  @Field((_type) => User)
  @Property({ ref: User, required: true })
  author: Ref<User>;
}

export const RecipeModel = getModelForClass(Recipe);
