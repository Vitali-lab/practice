export const transfotmPost = (dbPost) => ({
  id: dbPost.id,
  content: dbPost.content,
  title: dbPost.title,
  imageUrl: dbPost.image_url,
  publishedAt: dbPost.published_at,
});
