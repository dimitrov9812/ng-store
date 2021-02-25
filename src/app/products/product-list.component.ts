import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';
import { IProduct } from './product';
@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    public pageTitle: string = "Product List"
    public errorMessage: string = '';
    public imageWidth: number = 50;
    public imageMargin: number = 2;
    public isImageShown: boolean = false;
    private _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    public products: IProduct[] = [];
    public filteredProducts: IProduct[];

    constructor(private productService: ProductDataService) {
        this.listFilter = 'cart';
    }

    ngOnInit(): void {
        this.productService.getProducts()
                           .subscribe((data: IProduct[]) => {
                               this.products = data;
                               this.filteredProducts = this.products;
                           },
                           (err) => {
                               this.errorMessage = err;
                           }
                           );
    }

    toggleImage(): void {
        this.isImageShown = !this.isImageShown;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => {
            return product.productName.toLowerCase().indexOf(filterBy) != -1
        });
    }

    onNotify(value: string): void {
        this.pageTitle = `Product List - Selected item start rating: ${value}`
    }
}