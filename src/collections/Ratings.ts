import { CollectionConfig } from "payload/types";

const Ratings: CollectionConfig = {
  slug: "ratings",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
  timestamps: false,
};

export default Ratings;
