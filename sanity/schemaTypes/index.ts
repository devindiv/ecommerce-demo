import { type SchemaTypeDefinition } from "sanity";
import product from "./product";
import heroImages from "./heroImages";
import category from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, heroImages, category],
};
