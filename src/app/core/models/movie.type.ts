export interface Movie {
  biDanh: string;
  danhGia: number;
  hinhAnh: string;
  maNhom: string;
  maPhim: number;
  moTa: string;
  ngayKhoiChieu: string;
  tenPhim: string;
  trailer: string;
}

export interface Ve {
  maGhe: number;
  giaVe: number;
}

export interface DanhSachVe {
  maLichChieu: number;
  danhSachVe: Ve[];
  taiKhoanNguoiDung: string;
}
