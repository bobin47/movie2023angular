export interface Movie {
  biDanh: string | undefined;
  danhGia: number | undefined;
  hinhAnh: string | undefined;
  maNhom: string | undefined;
  maPhim: string | undefined;
  moTa: string | undefined;
  ngayKhoiChieu: string | undefined;
  tenPhim: string | undefined;
  trailer: string | undefined;
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
