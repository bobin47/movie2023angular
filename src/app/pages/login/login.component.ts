import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../core/models/auth.type';
import { AuthService } from '../../core/service/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  isLoading: boolean = false;

  signForm = new FormGroup({
    taiKhoan: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    matKhau: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  onSubmit() {
    this.isLoading = true;
    let userLogin: Auth = this.signForm.value;
    this.authService.DangNhap(userLogin).subscribe(
      (res) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.isLoading = false;
        this.toastr.success('dang nhap thanh cong hihi');
        setTimeout(() => {
          location.assign('/home');
        }, 2000);
      },

      (err) => {
        this.isLoading = false;
        this.toastr.error(err.error);
      }
    );
  }
}
