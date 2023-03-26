import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public DanhSachNguoiDung(): Observable<any> {
    return this.http.get<any>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01'
    );
  }

  public ThemNguoiDung(value: any): Observable<any> {
    return this.http.post(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
      value
    );
  }

  public XoaNguoiDung(value: string): Observable<any> {
    return this.http.delete(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${value}`
    );
  }

  public EditNguoiDung(value: any): Observable<any> {
    return this.http.put(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
      value
    );
  }
}
