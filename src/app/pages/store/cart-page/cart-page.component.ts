import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { Cart } from 'src/app/models/cart.model';
import { CartUtil } from 'src/app/utils/cart.util';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html'
})
export class CartPageComponent implements OnInit {
  public cart: Cart = new Cart();

  ngOnInit(): void {
    this.loadCart();
  }

  total() {
    let total = 0;
    this.cart.items.forEach((item) => total += (item.price * item.quantity));
    return total;
  }

  loadCart() {
    this.cart = CartUtil.get();
  }

  remove(item: CartItem) {
    let index = this.cart.items.indexOf(item);
    this.cart.items.splice(index, 1);
    CartUtil.update(this.cart);
  }

  clear() {
    CartUtil.clear();
    this.loadCart();
  }
}
