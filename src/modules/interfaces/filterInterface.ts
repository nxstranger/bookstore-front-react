export interface filterInterface {
  authorId?: string | number,
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
  ordering?: '' | 'authorASC' | 'authorDESC' | 'priceASC' | 'priceDESC',
}

export interface pageAndOrderInterface {
  page?: number,
  ordering?: string
}
