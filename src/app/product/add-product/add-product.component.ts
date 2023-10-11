import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  productForm: FormGroup = new FormGroup({
    pname: new FormControl('', [Validators.required]),
    pcategory: new FormControl('', [Validators.required]),
    pbrand: new FormControl('', [Validators.required]),
    pprice: new FormControl('', [Validators.required]),
    pquantity: new FormControl('', [Validators.required]),
    punit: new FormControl('', [Validators.required])
  });

  constructor(private ps: ProductService){}

  addProduct(){
    if(this.productForm.valid){
      console.log('hello',this.productForm.value);
      this.ps.addProduct(this.productForm.value);
    }else{
      console.error(this.productForm.controls['name'].valid)
    }
  }
}
