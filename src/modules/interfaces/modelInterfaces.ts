export interface authorInterface {
  id: number,
  name: string,
}

export interface userInfoInterface {
  id: number,
  dateOfBirthday: string,
  name: string,
  email: string
}

export interface categoriesInterface {
  id: number,
  title: string,
  slug: string
}

export interface imagesInterface {
  id: number,
  bookId: number,
  name: string,
}

export interface shortImagesInterface {
  name: string,
}

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
  BookImages: shortImagesInterface[],
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
