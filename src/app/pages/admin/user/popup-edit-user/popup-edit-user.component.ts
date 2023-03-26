import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../../../core/service/users/user.service';
import { User } from './../../../../core/models/user.type';
import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup-edit-user',
  templateUrl: './popup-edit-user.component.html',
  styleUrls: ['./popup-edit-user.component.scss'],
})
export class PopupEditUserComponent {
  user: any = {};

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.user = this.data;
    this.themUserForm.controls.email.setValue(this.user.email);
    this.themUserForm.controls.hoTen.setValue(this.user.hoTen);
    this.themUserForm.controls.maLoaiNguoiDung.setValue(
      this.user.maLoaiNguoiDung
    );
    this.themUserForm.controls.matKhau.setValue(this.user.matKhau);
    this.themUserForm.controls.soDt.setValue(this.user.soDt);
    this.themUserForm.controls.taiKhoan.setValue(this.user.taiKhoan);
  }

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
    console.log();
    this.userService.EditNguoiDung(this.themUserForm.value).subscribe(
      (res) => {
        this.toastr.success('Cap Nhat nguoi dung thanh cong');
      },
      (err) => {
        this.toastr.error(err.error);
      }
    );
    this.dialogRef.close();
  }
}
