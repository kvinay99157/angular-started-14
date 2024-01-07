import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { StarComponent } from '../shared/star.component';
import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';
import { ProductDetailsComponent } from './products-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './products-details/product-detail.guard';



@NgModule({
  declarations: [
    ProductListComponent,
    StarComponent,
    ConvertToSpacePipe,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'Product' , component: ProductListComponent },
      {path: 'product/:id', component: ProductDetailsComponent,
       canActivate: [ProductDetailGuard] 
    },
    ])

  ]
})
export class ProductModule { }
