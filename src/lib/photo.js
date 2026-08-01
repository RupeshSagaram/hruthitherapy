// Glob import so the site still builds if hruthika.jpg hasn't been added yet.
const photoModules = import.meta.glob('../assets/hruthika.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const photoSrc = Object.values(photoModules)[0]
