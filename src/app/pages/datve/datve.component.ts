import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { DanhSachVe, Ve } from './../../core/models/movie.type';
import { RapService } from './../../core/service/rap/rap.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-datve',
  templateUrl: './datve.component.html',
  styleUrls: ['./datve.component.scss'],
})
export class DatveComponent {
  constructor(
    private router: ActivatedRoute,
    private rapService: RapService,
    private toastr: ToastrService
  ) {}

  danhSachGhe: any;
  danhSachGheDangDat: any[] = [];
  soGheDaDat: number = 0;
  soGheConLai: number = 0;
  isloading: boolean = false;
  maLichChieu: any;
  ve: Ve[] = [];

  ngOnInit() {
    this.router.params.subscribe((res) => {
      this.maLichChieu = res['iddatve'];
      this.rapService.LayDanhSachPhongVe(res['iddatve']).subscribe((res) => {
        this.isloading = true;
        this.danhSachGhe = res.danhSachGhe;
        for (let i of this.danhSachGhe) {
          if (i.daDat === true) {
            this.soGheDaDat++;
          } else {
            this.soGheConLai++;
          }
        }
        this.isloading = false;
      });
    });
  }

  datgheOutput(value: Event, ghe: any) {
    let ve: Ve = {
      maGhe: ghe.maGhe,
      giaVe: ghe.giaVe,
    };

    if (value) {
      this.danhSachGheDangDat.push(ghe);
      this.soGheDaDat++;
      this.soGheConLai--;
      this.ve.push(ve);
    } else {
      this.soGheDaDat--;
      this.soGheConLai++;
      for (let index in this.danhSachGheDangDat) {
        if (this.danhSachGheDangDat[index].maGhe == ghe.maGhe) {
          this.danhSachGheDangDat.splice(parseInt(index), 1);
        }
      }

      for (let iVe in this.ve) {
        if (this.ve[iVe].maGhe === ve.maGhe) {
          this.ve.splice(parseInt(iVe), 1);
        }
      }
    }
  }

  datve() {
    const { taiKhoan } = JSON.parse(localStorage.getItem('user') || '');
    const userInfo = localStorage.getItem('user');
    if (userInfo) {
      let danhSachVe: DanhSachVe = {
        taiKhoanNguoiDung: taiKhoan,
        danhSachVe: this.ve,
        maLichChieu: this.maLichChieu,
      };

      this.rapService.Datve(danhSachVe).subscribe(
        (res) => {
          console.log(res);
          this.toastr.success('Dat ve thanh cong');
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          if (err.status === 200) {
            this.toastr.success('dat ve thanh cong');
          }
        }
      );
    } else {
      console.log('hihi');
      this.toastr.warning('dang nhap de tieng hanh dat ve');
    }
  }
}
