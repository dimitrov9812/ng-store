import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../products/product';
import { ProductDataService } from '../services/product-data.service';

function range(min: number, max:number): ValidatorFn {
  return (c: AbstractControl): {[key: string]: boolean} | null => {
    if(c.value < min || c.value > max) {
      return { 'range': true };
    }

    return null;
  }
}

@Component({
  selector: 'pm-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public product: IProduct;
  public productForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private productService: ProductDataService) { }

  ngOnInit(): void {
    let id;
    this.route.params.subscribe((params) => {
       id=params['id'];
    })
    this.productService.getProducts().subscribe((products: IProduct[]) => {
       let selectedProduct = products.filter((x) => x.productId == id);
       this.product = selectedProduct[0];
    });

    this.productForm = this.formBuilder.group({
      productName: ['',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]],
      productCode: ['', Validators.required],
      starRating: ['', Validators.required],
      tags: this.formBuilder.array([this.formBuilder.group({
        tag:''
      })]),
      description: ['', range(0,8)]
    })
  }
}
