import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private data = [
    {
      category: 'Pizzas',
      expanded: true,
      products: [
        { id: 0, name: 'Salami', price: '18000', imgUrl: 'assets/img/piza-salami.jpg' },
        { id: 1, name: 'Clasica', price: '15000', imgUrl: 'assets/img/piza-clasica.jpg' },
        { id: 2, name: 'Tuna', price: '22000', imgUrl: 'assets/img/tunapizza.jpg' },
        { id: 3, name: 'Hawai', price: '25000', imgUrl: '../../assets/img/hawaiana.jpg' }
      ]
    },
    {
      category: 'Pastas',
      products: [
        { id: 4, name: 'Mac & Chese', price: '5.000', imgUrl: 'assets/img/Mac_and_Cheese.png' },
        { id: 5, name: 'Bolognese', price: '15.000', imgUrl: 'assets/img/bolo-pastas.png' },
        { id: 6, name: 'Farfalle', price: '12.000', imgUrl: 'assets/img/pastas-farfalle.png' },
        { id: 7, name: 'Ravioli', price: '16.000', imgUrl: 'assets/img/pastas-rabioli.png' }
      ]
    }
  ];

  private cart = [];

  constructor() { }

  //obtener listado de productos
  getProducts() {
    return this.data;
  }

  //obtenr cart
  getCart() {
    return this.cart;
  }

  //agregar un producto al cart
  addProductToCart(product) {
    this.cart.push(product);
  }


}
