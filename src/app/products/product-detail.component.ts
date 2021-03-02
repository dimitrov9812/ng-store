import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public pageTitle: string = 'Single Product View'
  public product: IProduct;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductDataService) { }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.paramMap.get('id');
    this.pageTitle == this.pageTitle + ":" + id;

    // get the product with the specified ID
    this.productService.getProducts()
                       .subscribe((products) => {
                          let index = products.findIndex((x) => x.productId == id);
                          if (index != -1) {
                            this.product = products[index];
                          }
                       });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
