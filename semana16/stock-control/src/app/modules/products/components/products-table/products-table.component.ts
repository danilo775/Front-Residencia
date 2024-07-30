import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductEvent } from 'src/app/models/enums/products/ProductEvent';
import { DeleteProductAction } from 'src/app/models/interfaces/products/event/DeleteProductAction';
import { GetAllProductsResponse } from 'src/app/models/interfaces/products/response/GetAllProductsResponse';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent {
  @Input() products: Array<GetAllProductsResponse> = [];
  @Output() productEvent = new EventEmitter<{ action: string, id?: string }>();
  @Output() deleteProductEvent = new EventEmitter<DeleteProductAction>();

  public productSelected!: GetAllProductsResponse;

  public addProductEvent = ProductEvent.ADD_PRODUCT_EVENT;
  public editProductEvent = ProductEvent.EDIT_PRODUCT_EVENT;

  handleProductEvent(action: string, id?: string): void {
    if (action && action !== '') {
      const ProductEventData = id && id !== '' ? { action, id } : { action };

      this.productEvent.emit(ProductEventData);
    }

  }
  handleDeleteProduct(product_id: string, productName: string): void {
    if (product_id !== '' && product_id !== '') {
     this.deleteProductEvent.emit({ product_id, productName });
    }


  }
}
