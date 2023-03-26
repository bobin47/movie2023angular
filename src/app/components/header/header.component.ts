import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user = localStorage.getItem('user');
  isLogin: boolean = false;
  isAdmin: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const { maLoaiNguoiDung } = JSON.parse(this.user || '');

    if (maLoaiNguoiDung === 'QuanTri') {
      this.isAdmin = !this.isAdmin;
    }

    if (this.user) {
      this.isLogin = !this.isLogin;
    }
  }

  dangXuat() {
    localStorage.removeItem('user');
    location.assign('/home');
  }
}
