import { Component, Injectable, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog',
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
})
export class ConfirmationDialogComponent {

  dialogRef = inject(MatDialogRef);

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}

@Injectable({ providedIn: 'root' })
export class ConfirmationDialogService {

  matDialog = inject(MatDialog);

  constructor() { }

  openDialog() {
    return this.matDialog.open(ConfirmationDialogComponent).afterClosed();
  }

}
