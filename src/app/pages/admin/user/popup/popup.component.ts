import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../../../core/service/users/user.service';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  themUserForm = new FormGroup({
    taiKhoan: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    matKhau: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    hoTen: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
    ]),
    soDt: new FormControl('', [Validators.required]),
    maNhom: new FormControl('', [Validators.required]),
    maLoaiNguoiDung: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    console.log(this.themUserForm.value);
    this.dialogRef.close();

    this.userService.ThemNguoiDung(this.themUserForm.value).subscribe(
      (res) => {
        this.toastr.success('them thanh cong');
        console.log(res);
      },
      (err) => {
        this.toastr.error(err.error);
        console.log(err);
      }
    );
  }
}
