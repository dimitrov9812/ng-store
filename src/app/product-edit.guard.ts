import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { EditProductComponent } from './edit-product/edit-product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductEditGuard implements CanDeactivate<EditProductComponent> {
  canDeactivate(component: EditProductComponent): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.productForm.dirty) {
      const productName = component.productForm.get('productNme').value || 'New Product';
      return confirm(`Navigate away and lose all changes to ${productName}`)
    }
  }
}
