import { ToastrService } from 'ngx-toastr';
import { MovieService } from './../../../../core/service/movie/movie.service';
import { Movie } from './../../../../core/models/movie.type';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-flim',
  templateUrl: './form-add-flim.component.html',
  styleUrls: ['./form-add-flim.component.scss'],
})
export class FormAddFlimComponent {
  constructor(
    private movieServi: MovieService,
    private notice: ToastrService
  ) {}

  themFlimForm = new FormGroup({
    maPhim: new FormControl(''),
    tenPhim: new FormControl(''),
    biDanh: new FormControl(''),
    trailer: new FormControl(''),
    hinhAnh: new FormControl(''),
    moTa: new FormControl(''),
    maNhom: new FormControl(''),
    ngayKhoiChieu: new FormControl<Date | null>(null),
    danhGia: new FormControl(''),
  });

  checkDay(value: any) {
    if (value >= 10) {
      return String(value);
    }
    return `0${value}`;
  }

  onSubmit() {
    let Flim: any = {
      ...this.themFlimForm.value,
      ngayKhoiChieu: String(
        `${this.checkDay(
          this.themFlimForm.value.ngayKhoiChieu?.getDate()
        )}/${this.checkDay(
          this.themFlimForm.value.ngayKhoiChieu?.getMonth()
        )}/${this.themFlimForm.value.ngayKhoiChieu?.getFullYear()}`
      ),
    };

    this.movieServi.ThemPhim(Flim).subscribe(
      (res) => {
        console.log(res);
        this.notice.success('them thanh cong');
      },
      (err) => {
        this.notice.error('them phim khong thanh cong');
      }
    );
  }
}
