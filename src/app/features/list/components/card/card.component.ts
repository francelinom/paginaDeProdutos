import { Component, EventEmitter, Output, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  produto = input.required<Product>();

  @Output() edit = new EventEmitter();
  @Output() deletar = new EventEmitter();

  tituloProduto = computed(() => this.produto().titulo);
}
