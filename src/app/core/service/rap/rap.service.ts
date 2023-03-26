import { DanhSachVe } from './../../models/movie.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RapService {
  constructor(private http: HttpClient) {}

  public HeThongRap(): Observable<any> {
    return this.http.get<any>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap'
    );
  }

  public CumRapTheoHeThong(value: string): Observable<any> {
    return this.http.get<any>(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${value}`
    );
  }

  public ThongTinLichChieuPhim(value: string): Observable<any> {
    return this.http.get<any>(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${value}`
    );
  }

  public LayDanhSachPhongVe(value: string): Observable<any> {
    return this.http.get<any>(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${value}`
    );
  }

  public Datve(ve: DanhSachVe): Observable<any> {
    return this.http.post<any>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
      ve
    );
  }
}
