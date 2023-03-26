import { PopupEditUserComponent } from './popup-edit-user/popup-edit-user.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { User } from './../../../core/models/user.type';
import { UserService } from './../../../core/service/users/user.service';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  constructor(
    private userServer: UserService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) {}

  DanhSachNguoiDuong: User[] = [];
  displayedColumns: string[] = [
    'hoTen',
    'email',
    'soDt',
    'taiKhoan',
    'maLoaiNguoiDung',
    'action',
  ];

  dataSource = new MatTableDataSource<User>(this.DanhSachNguoiDuong);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.userServer.DanhSachNguoiDung().subscribe(
      (res) => {
        this.DanhSachNguoiDuong = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(element: User) {
    const dialogRef = this.dialog.open(PopupEditUserComponent, {
      width: '550px',
      height: '500px',
      data: element,
    });
  }

  delete(element: User) {
    console.log(element);
    this.userServer.XoaNguoiDung(element.taiKhoan).subscribe(
      (res) => {
        console.log(res);
        this.toastr.success('xoa nguoi dung thanh cong');
      },
      (err: HttpErrorResponse) => {
        if (err.status === 200) {
          this.toastr.success('xoa nguoi dung thanh cong');
        } else if (err.status === 500) {
          this.toastr.error(err.error);
        }
        console.log(err);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
