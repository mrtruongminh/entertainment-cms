import { CollectionConfig } from "payload/types";

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    defaultColumns: [
      "title",
      "year",
      "category",
      "ratings",
      "isBookmarked",
      "isTrending",
      "thumbnailRegular",
    ],
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "year",
      type: "number",
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
    },
    {
      name: "ratings",
      type: "relationship",
      relationTo: "ratings",
    },
    {
      name: "isBookmarked",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "isTrending",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "thumbnailRegular",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "thumbnailTrending",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default Posts;
