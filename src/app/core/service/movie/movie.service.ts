import { Movie } from './../../models/movie.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  public DanhSachPhim(): Observable<Movie[]> {
    return this.http.get<Movie[]>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03'
    );
  }

  public ThemPhim(value: any): Observable<any> {
    return this.http.post<any>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim',
      value
    );
  }

  public XoaPhim(value: string): Observable<any> {
    return this.http.delete<any>(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${value}`
    );
  }

  public DetailFim(idFim: string): Observable<any> {
    return this.http.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idFim}`
    );
  }
}
