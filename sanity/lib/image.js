import createImageUrlBuilder from '@sanity/image-url';

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
});

export const urlFor = (source) => {
  return builder.image(source);
};
