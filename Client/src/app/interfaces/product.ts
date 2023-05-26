export interface Product {
  _id: string | number;
  name: string;
  price: number;
  imgUrl: string;
  images : string[];
  colors ?: string[];
  infors ?: infor
}
type infor = {
  id: number;
  colors: string;
  material: string;
  style: string;
  desc: string;
  infoImage: string
}