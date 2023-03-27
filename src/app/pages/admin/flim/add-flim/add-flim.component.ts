import { FormAddFlimComponent } from './../form-add-flim/form-add-flim.component';
import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-flim',
  templateUrl: './add-flim.component.html',
  styleUrls: ['./add-flim.component.scss'],
})
export class AddFlimComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormAddFlimComponent, {
      width: '500px',
      height: '700px',
    });
  }
}
