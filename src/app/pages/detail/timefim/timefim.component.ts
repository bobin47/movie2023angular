import { ActivatedRoute } from '@angular/router';
import { RapService } from './../../../core/service/rap/rap.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timefim',
  templateUrl: './timefim.component.html',
  styleUrls: ['./timefim.component.scss'],
})
export class TimefimComponent {
  @Input() maCumRap: any;

  constructor(private rapService: RapService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.rapService.ThongTinLichChieuPhim(res['id']).subscribe((res) => {
        console.log(res.heThongRapChieu.cumRapChieu);
      });
    });
  }
}
