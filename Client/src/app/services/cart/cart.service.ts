import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // private cartKey = 'cart';

  // constructor() {}

  // addToCart(product: Product): void {
  //   const cartItems = this.getCartItems();
  //   const existingItem = cartItems.find(
  //     (item: Product) => item._id === product._id
  //   );

  //   if (existingItem) {
  //     existingItem.quantity += 1; // Tăng số lượng sản phẩm nếu đã tồn tại trong giỏ hàng
  //   } else {
  //     cartItems.push({ ...product, quantity: 1 }); // Thêm sản phẩm mới vào giỏ hàng với số lượng là 1
  //   }

  //   this.saveCartItems(cartItems);
  // }

  // removeItemById(productId: string): void {
  //   const cartItems = this.getCartItems();
  //   const index = cartItems.findIndex((item) => item._id === productId);
  //   if (index !== -1) {
  //     cartItems.splice(index, 1);
  //     this.saveCartItems(cartItems);
  //   }
  // }

  getCartItems(): any[] {
    const cartItems = localStorage.getItem(this.cartKey);
    if (cartItems) {
      return JSON.parse(cartItems);
    }
    return [];
  }

  updateCartTotal(): number {
    const cartItems = this.getCartItems();
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  // private saveCartItems(items: any[]): void {
  //   localStorage.setItem(this.cartKey, JSON.stringify(items));
  // }

  getTotalAmount(): number {
    const cartItems = this.getCartItems();
    const totalAmount = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return totalAmount;
  }

  //=========================================//

  private cartKey = 'carts';

  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );
  public cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {
    const savedCartItems = localStorage.getItem(this.cartKey);
    if (savedCartItems) {
      this.cartItemsSubject.next(JSON.parse(savedCartItems));
    }
  }

  addToCart(item: any) {
    const currentItems = this.cartItemsSubject.getValue();
    const existingItem = currentItems.find(
      (cartItem: Product) => cartItem._id === item._id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentItems.push({ ...item, quantity: 1 });
    }

    this.cartItemsSubject.next(currentItems);
    this.saveCartItems(currentItems);
  }

  removeItemById(productId: string) {
    const currentItems = this.cartItemsSubject.getValue();
    const index = currentItems.findIndex(
      (item: Product) => item._id === productId
    );

    if (index !== -1) {
      currentItems.splice(index, 1);
      this.cartItemsSubject.next(currentItems);
      this.saveCartItems(currentItems);
    }
  }

  private saveCartItems(items: any[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(items));
  }
}
