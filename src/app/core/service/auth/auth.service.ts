import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth, LoginSuccess, Register } from '../../models/auth.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public DangNhap(value: Auth): Observable<LoginSuccess> {
    return this.http.post<LoginSuccess>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
      value
    );
  }

  public DangKy(value: Register): Observable<Register> {
    return this.http.post<Register>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
      value
    );
  }
}
