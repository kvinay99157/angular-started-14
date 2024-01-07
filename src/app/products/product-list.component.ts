import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product-interface';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit , OnDestroy{
 pageTitle:string = 'Product List !' ;
 imageWidth:number = 50;
 imageMargin:number = 2;
 showImage:boolean = true;
 errorMessage: string = '';
 sub! : Subscription

private _listFilter:string = '';

 get listFilter() : string {
  return this._listFilter;
}
 set listFilter(v : string) {
  this._listFilter = v;
  console.log('in setter',v)
  this.filterProd = this.performFilter(v);
}

// use filter prodct 
filterProd: IProduct[]= [];

 products: IProduct[]  = [];
constructor(private _productServices: ProductService) {
  
}

performFilter(filterBy: string): IProduct[] {
filterBy= filterBy.toLocaleLowerCase();
return this.products.filter((product: IProduct) =>
 product.productName.toLocaleLowerCase().includes(filterBy));
}

toggleImage() : void{
  this.showImage = !this.showImage
}

ngOnInit(): void {
  this.sub = this._productServices.getProducts().subscribe({
  next: products =>{ this.products = products;
    this.filterProd = this.products;
  },
  error: err => this.errorMessage = err
 })
  
  // this.listFilter = 'cart';
}


onRatingClicked(message : string) : void{
  this.pageTitle = 'product list: ' + '' + message;
}

ngOnDestroy(): void {
    this.sub.unsubscribe();
}

}

