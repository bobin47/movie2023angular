import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../core/service/auth/auth.service';
import { Register } from '../../core/models/auth.type';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  isLoading: boolean = false;
  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {}

  public registerForm = new FormGroup({
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
    sdt: new FormControl('', [Validators.required]),
    maNhom: new FormControl('', [Validators.required]),
    maLoaiNguoiDung: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.isLoading = true;
    let userRegister: Register = this.registerForm.value;
    this.authService.DangKy(userRegister).subscribe(
      (res) => {
        console.log(res);
        this.isLoading = false;

        this.toastr.success('dang ly thanh cong r nha');
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        this.isLoading = false;
        this.toastr.warning(err.error);
      }
    );
  }
}
