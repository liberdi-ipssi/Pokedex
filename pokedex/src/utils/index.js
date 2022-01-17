import slugify from "slugify";

export const lowerSlugify = (element) => slugify(element).toLocaleLowerCase();