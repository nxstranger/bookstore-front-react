export interface bookInterface {
  id: number,
  title: string,
  price: number,
  description: string,
  image: string,
  slug: string,
  Category: {
    slug: string,
  }
  BookAuthor: {
    name: string,
  }
}
