import { Component, OnInit } from '@angular/core';
import { CartService } from '../home/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  selectItems = [];
  total = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};

    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = { ...obj, count: 1 };
      }
    }
    this.selectItems = Object.keys(selected).map(key => selected[key])
    console.log('items: ', this.selectItems);
    this.total = this.selectItems.reduce((a, b) => a + (b.count * b.price), 0);
  }

}
