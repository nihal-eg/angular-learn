import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


// Define a custom event type for the view event
interface ProductViewEvent {
  productId: string;
}

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss']
})
export class ProductsHeaderComponent {
  @Input() products: any;
  @Output() viewProduct = new EventEmitter<string>();

  view() {
    console.log("view");
    this.viewProduct.emit(this.products.id);
  }
}