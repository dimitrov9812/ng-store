import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public pageTitle: string = 'Single Product View'
  public product: IProduct = {
    productName:'Baseball Bat',
    productCode:'222',
    productId: 123431,
    price:23,
    description:'tasdasdsaest',
    imageUrl:'ulr',
    releaseDate:'23 Jan',
    starRating:4.3
  }
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.pageTitle == this.pageTitle + ":" + id;
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
