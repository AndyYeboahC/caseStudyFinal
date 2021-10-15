export interface Product {
  id: number;
  name: string;
  photo: string;
  price: number;
  description: string;
  reviews: IReviews[];
}

export interface IReviews {
  userName: string;
  rating: number;
  comment: string;
}
