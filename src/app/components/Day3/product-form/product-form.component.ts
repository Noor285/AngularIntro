import { Component ,EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  @Output() sendEvent: EventEmitter<IProduct[]> = new EventEmitter();

  products: IProduct[] = [];
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    category: new FormControl('', [Validators.required, Validators.minLength(4)]),
    price: new FormControl(null, [Validators.required, Validators.min(100)]),
    quantity: new FormControl(null, [Validators.required, Validators.min(5)]),
    discount: new FormControl(null, [Validators.required, Validators.min(5), Validators.max(25)]),
    onSale: new FormControl()
  });

  get nameControl() {
    return this.productForm.get("name");
  }
  get categoryControl() {
    return this.productForm.get("category");
  }
  get priceControl() {
    return this.productForm.get("price");
  }
  get quantityControl() {
    return this.productForm.get("quantity");
  }
  get discountControl() {
    return this.productForm.get("discount");
  }
  get saleControl(){
    return this.productForm.get("sale");
  }

  GetProducts() {
    if (this.productForm.valid) {
      this.sendEvent.emit(this.productForm.value);
      console.log("Hello data");

      this.productForm.reset();
    } else {
      this.productForm.markAllAsTouched(); 
    }
  }
}
