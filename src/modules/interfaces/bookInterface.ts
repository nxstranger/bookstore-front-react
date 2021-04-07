export interface bookInterface {
  id: number,
  title: string,
  price: number,
  description: string,
  media: string,
  slug: string,
  Category: {
    slug: string,
  }
  BookAuthor: {
    name: string,
  }
}
export interface bookInterfaceAdmin {
  id: string,
  title: string,
  price: string | null,
  description: string | null,
  media: string,
  slug: string,
  category:string | null,
  author: string | null,
  publish: true | false,
}
