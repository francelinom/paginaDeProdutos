import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/interfaces/product.interface';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  produtoService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);
  product: Product = inject(ActivatedRoute).snapshot.data['product'];

  form = new FormGroup({
    titulo: new FormControl<string>(this.product.titulo, {
      nonNullable: true,
      validators: Validators.required
    }),
  });

  onSubmit() {
    this.produtoService.put(this.product.id, {titulo: this.form.controls.titulo.value}).subscribe(() => {
      this.matSnackBar.open('Produto editado com sucesso', 'Fechar');
      this.form.reset();
      this.router.navigateByUrl('');
    })
  }

}
