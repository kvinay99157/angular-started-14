import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product-interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
pageTitle: string = 'Product Details';
product: IProduct | undefined ; 
  constructor(private route: ActivatedRoute ,  private router: Router , private productService: ProductService) { }

  ngOnInit(): void {
    const id =Number( this.route.snapshot.paramMap.get('id'));
    this.pageTitle +=`: ${id}`
  }
  onBack(): void {
this.router.navigate(['/Product'])
  }

}
