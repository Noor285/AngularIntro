import { Component,Input } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() products : IProduct[] = [];

  deleteProduct(index: number): void {
    this.products.splice(index, 1);
  }

}
