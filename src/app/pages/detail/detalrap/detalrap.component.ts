import { ActivatedRoute } from '@angular/router';
import { RapService } from './../../../core/service/rap/rap.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalrap',
  templateUrl: './detalrap.component.html',
  styleUrls: ['./detalrap.component.scss'],
})
export class DetalrapComponent {
  @Input() maHeThongRap: any;
  raps: any;
  CumRapChieu: any;
  a: any;
  constructor(private rapService: RapService, private router: ActivatedRoute) {}
  ngOnInit() {
    this.rapService.CumRapTheoHeThong(this.maHeThongRap).subscribe(
      (res) => {
        this.raps = res;
        this.router.params.subscribe((res) => {
          this.rapService.ThongTinLichChieuPhim(res['id']).subscribe((res) => {
            this.a = res;
            console.log(this.a.heThongRapChieu[0], 'a');
            this.CumRapChieu = res.heThongRapChieu[0].cumRapChieu[0].maCumRap;
          });
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
