import { UserResolver } from "./user";
import { RecipeResolver } from "./recipe";
import { RateResolver } from "./rate";
import { BlogResolver } from "./blog";

export const Resolvers = [
  RecipeResolver,
  RateResolver,
  UserResolver,
  BlogResolver,
] as const;
