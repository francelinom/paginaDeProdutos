import { Component, EventEmitter, OnInit, Output, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{

  product = input<Product | null>(null)

  form!: FormGroup;

  @Output() submit = new EventEmitter<Product>()

  ngOnInit(): void {
    this.form = new FormGroup({
      titulo: new FormControl<string>(this.product()?.titulo ?? '', {
        nonNullable: true,
        validators: Validators.required
      }),
    });

  }

  onSubmit() {
    const product = this.form.value as Product;
    this.submit.emit(product);
  }

}
