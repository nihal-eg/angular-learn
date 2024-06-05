import { Component, inject } from '@angular/core';
import { ProductsHeaderComponent } from '../products-header/products-header.component';
import { SearchComponent } from '../search/search.component';
import { ProductsService } from '../../products.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
// import { ProductService } from '../product.service'; // Assuming productService is defined in product.service.ts

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsHeaderComponent, SearchComponent,ProductDetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: any[] = [];
  filteredProduct: any[] = [];
 productService = inject(ProductsService)

  ngOnInit() {
    // this.products = this.productService.products;
    this.productService.getProduct().subscribe((result: any)=>{
    this.products=result;
    this.filteredProduct = this.products;
    })
    
  }

  onViewproduct(event: any) {
    console.log('recieved', event);
  }

  onSearch(search: string) {
    console.log(search);

    if (search) {
      this.filteredProduct = this.filteredProduct.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredProduct = this.products;
      console.log('not');
    }
  }
}