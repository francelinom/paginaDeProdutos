import { Component, inject } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductsService } from '../../shared/services/products.service';
import { CardComponent } from './components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirmation',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Deletar Item</h2>
    <mat-dialog-content>
      Tem certeza que deseja deletar este item?
    </mat-dialog-content>
    <mat-dialog-actions aling="end">
      <button mat-button (click)="onNoClick()">Não</button>
      <button mat-raised-button (click)="onYesClick()" color="accent" cdkFocusInitial>Sim</button>
    </mat-dialog-actions>
  `,
  styleUrl: './components/card/card.component.css'
})
export class DialogConfirmationComponent {

  dialogRef = inject(MatDialogRef);

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  produtos: Product[] = [];

  produtoService = inject(ProductsService);
  router = inject(Router);
  matDialog = inject(MatDialog);

  ngOnInit() {
    this.produtoService.getAllProducts().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product.id]);
  }

  onDelete(product: Product) {
    this.matDialog.open(DialogConfirmationComponent).afterClosed().subscribe(result => {

    })
  }
}
