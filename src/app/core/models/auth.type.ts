export interface Auth {
  taiKhoan?: string | null;
  matKhau?: string | null;
}

export interface LoginSuccess {
  accessToken: string;
  email: string;
  hoTen: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  soDT: string;
  taiKhoan: string;
}

export interface Register {
  taiKhoan?: string | null;
  matKhau?: string | null;
  email?: string | null;
  soDt?: string | null;
  maNhom?: string | null;
  maLoaiNguoiDung?: string | null;
  hoTen?: string | null;
}
