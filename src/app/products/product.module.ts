import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../pipes/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    // Components
    ProductListComponent,
    ProductDetailComponent,
    EditProductComponent,
    // Pipes
    ConvertToSpacesPipe,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
