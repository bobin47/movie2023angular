import { RapService } from './../../../core/service/rap/rap.service';
import { MovieService } from './../../../core/service/movie/movie.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.scss'],
})
export class ShowtimeComponent {
  HeThongRap: any;
  panelOpenState = false;

  constructor(private rapService: RapService) {}
  ngOnInit() {
    this.rapService.HeThongRap().subscribe((res) => {
      console.log(res);
      this.HeThongRap = res;
    });
  }
}
