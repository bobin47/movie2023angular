import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private toastr: ToastrService) {}
  canActivate() {
    if (!localStorage.getItem('user')) {
      this.router.navigate(['home']);
      return false;
    } else if (
      JSON.parse(localStorage.getItem('user') || '').maLoaiNguoiDung !==
      'QuanTri'
    ) {
      this.toastr.error('khong co quyn truy cap');
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
