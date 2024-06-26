import { ConfirmationDialogComponent, ConfirmationDialogService } from './../../shared/services/confirmation-dialog.service';
import { Component, inject, signal } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductsService } from '../../shared/services/products.service';
import { CardComponent } from './components/card/card.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NoItemsComponent } from './components/no-items/no-items.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule, ConfirmationDialogComponent, NoItemsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  produtos = signal<Product[]>(inject(ActivatedRoute).snapshot.data['products']);

  produtoService = inject(ProductsService);
  router = inject(Router);
  confirmationDialog = inject(ConfirmationDialogService);

  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product.id]);
  }

  onDelete(product: Product) {
    this.confirmationDialog.openDialog().subscribe(res => {
      if (res) {
        this.produtoService.delete(product.id).subscribe(() => {
          this.produtoService.getAllProducts().subscribe((produtos) => {
            this.produtos.set(produtos);
          })
        })
      }
    })
  }
}
