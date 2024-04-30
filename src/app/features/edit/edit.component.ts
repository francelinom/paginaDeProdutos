import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/interfaces/product.interface';
import { FormComponent } from '../../shared/components/form/form.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  produtoService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);
  product: Product = inject(ActivatedRoute).snapshot.data['product'];

  onSubmit(product: Product) {
    this.produtoService.put(this.product.id, product).subscribe(() => {
      this.matSnackBar.open('Produto editado com sucesso', 'Fechar');
      this.router.navigateByUrl('');
    })
  }

}