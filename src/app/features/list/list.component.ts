import { Component, inject } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  produtos: Product[] = [];

  produtoService = inject(ProductsService);

  ngOnInit() {
    this.produtoService.getAllProducts().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }
}
