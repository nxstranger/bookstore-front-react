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
  price?: number,
  description: string,
  media: string,
  slug: string,
  category?: number,
  author?: number,
  publish: true | false,
}

export interface bookUpdateDataInterface {
  title: string,
  slug: string,
  description: string,
  publish: true | false,
  price: number,
  category?: number,
  author?: number,
}
