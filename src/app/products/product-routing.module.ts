import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductDetailComponent } from './product-detail.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { ProductEditGuard } from '../product-edit.guard';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate:[ProductDetailGuard], component: ProductDetailComponent },
      { path: 'products/edit/:id', component:EditProductComponent }
    ]),
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
