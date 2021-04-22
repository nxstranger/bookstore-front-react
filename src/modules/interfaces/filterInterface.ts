export interface filterInterface {
  author?: string | number,
  category?: string,
  priceFrom?: number,
  priceTo?: number,
}

export interface queryInterface {
  priceFrom?: number,
  priceTo?: number,
  authorId?: string,
  category?: string,
  page?: number,
  ordering?: string,
}

export interface pageAndOrderInterface {
  bookCount?: number,
  page?: number,
  ordering?: string
}
